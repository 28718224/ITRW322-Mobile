import { Injectable } from '@angular/core';
import { Events } from 'ionic-angular';
import firebase from 'firebase';
import { analyzeAndValidateNgModules } from '@angular/compiler';
import { FileTransfer, FileTransferObject } from '@ionic-native/file-transfer';
import { File } from '@ionic-native/file';
/*
  Generated class for the GroupsProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class GroupsProvider {
  firegroup = firebase.database().ref('/groups');
  firegroupname = firebase.database().ref('/groupsnames');
  fireusername = firebase.database().ref('/users');
  mygroups: Array<any> = [];
  currentgroup:  Array<any> = [];
  currentgroupname;
  grouppic;
  groupowner;
  downloadfile:any;
  private fileTransfer: FileTransferObject;
  public sendersNames: Array<any> = [];
  groupmsgs:  Array<any> = [];
  constructor(public events: Events,private transfer: FileTransfer, private file:File) {

  }

  addgroup(newGroup) {
    var promise = new Promise((resolve, reject) => {
      this.firegroup.child(firebase.auth().currentUser.uid).child(newGroup.groupName).set({
        groupimage: newGroup.groupPic,
        msgboard: '',
        owner: firebase.auth().currentUser.uid
      }).then(() => {
        resolve(true);
        }).catch((err) => {
          reject(err);
      })
    });

    var promise2 = new Promise(async (resolve, reject) => {
      this.firegroupname.child(firebase.auth().currentUser.uid).child(await this.getIndex5(firebase.auth().currentUser.uid)).set({
        groupName: newGroup.groupName,

        owner: firebase.auth().currentUser.uid
      }).then(() => {
        resolve(true);
        }).catch((err) => {
          reject(err);
      })
    });


    return promise;
  }

  getmygroups() {
    this.firegroup.child(firebase.auth().currentUser.uid).once('value', (snapshot) => {
      this.mygroups = [];
      if(snapshot.val() != null) {
        var temp = snapshot.val();
        for (var key in temp) {
          var newgroup = {
            groupName: key,
            groupimage: temp[key].groupimage
          }
          this.mygroups.push(newgroup);
        }
      }
      this.events.publish('allmygroups');
    })

  }

  getownership(groupname) {
    var promise = new Promise((resolve, reject) => {
      this.firegroup.child(firebase.auth().currentUser.uid).child(groupname).once('value', (snapshot) => {
        var temp = snapshot.val().owner;
        this.groupowner =snapshot.val().owner;

        if (temp == firebase.auth().currentUser.uid) {
          resolve(true);
        }
        else {

          resolve(false);
        }
      }).catch((err) => {
          reject(err);
      })
    })
    return promise;
  }

  getintogroup(groupname) {
    if (groupname != null) {
      this.firegroup.child(firebase.auth().currentUser.uid).child(groupname).once('value', (snapshot) => {
        if (snapshot.val() != null) {
          var temp = snapshot.val().members;
          this.currentgroup = [];
          for (var key in temp) {
            this.currentgroup.push(temp[key]);
          }
          this.currentgroupname = groupname;
        }
      })
    }
  }


  getgroupimage() {
    return new Promise((resolve, reject) => {
      this.firegroup.child(firebase.auth().currentUser.uid).child(this.currentgroupname).once('value', (snapshot) => {
        this.grouppic = snapshot.val().groupimage;
        resolve(true);
    })
    })

  }

  async addmember(newmember) {
    this.firegroup.child(firebase.auth().currentUser.uid).child(this.currentgroupname).child('members').child(await this.getIndex()).set(newmember).then(async () => {
      this.getgroupimage().then(() => {
        this.firegroup.child(newmember.uid).child(this.currentgroupname).set({
          groupimage: this.grouppic,
          owner: firebase.auth().currentUser.uid,
          msgboard: ''
        }).catch((err) => {
          console.log(err);
        })
      })

      this.firegroupname.child(newmember.uid).child(await this.getIndex5(newmember.uid)).set({
        groupName: this.currentgroupname,
        owner: firebase.auth().currentUser.uid
      }).catch((err) => {
        console.log(err);
      })

      this.firegroup.child(newmember.uid).child(this.currentgroupname).child('members').child('0').set({
        displayName:'',
        photoURL: '',
        uid: ''
      }).catch((err) => {
        console.log(err);
      })


      this.getintogroup(this.currentgroupname);
    })
  }


  deletemember(member) {
    this.firegroup.child(firebase.auth().currentUser.uid).child(this.currentgroupname)
      .child('members').orderByChild('uid').equalTo(member.uid).once('value', (snapshot) => {
        snapshot.ref.remove().then(() => {
          this.firegroup.child(member.uid).child(this.currentgroupname).remove().then(() => {
            this.getintogroup(this.currentgroupname);
          })
        })
      })
  }

  getgroupmembers() {
    this.firegroup.child(firebase.auth().currentUser.uid).child(this.currentgroupname).once('value', (snapshot) => {
      var tempdata = snapshot.val().owner;
      this.firegroup.child(tempdata).child(this.currentgroupname).child('members').once('value', (snapshot) => {
        var tempvar = snapshot.val();
        for (var key in tempvar) {
          this.currentgroup.push(tempvar[key]);
        }
      })
    })
    this.events.publish('gotmembers');
  }



  leavegroup() {
    return new Promise((resolve, reject) => {
      this.firegroup.child(firebase.auth().currentUser.uid).child(this.currentgroupname).once('value', (snapshot) => {
      var tempowner = snapshot.val().owner;
      this.firegroup.child(tempowner).child(this.currentgroupname).child('members').orderByChild('uid')
        .equalTo(firebase.auth().currentUser.uid).once('value', (snapshot) => {
          snapshot.ref.remove().then(() => {
            this.firegroup.child(firebase.auth().currentUser.uid).child(this.currentgroupname).remove().then(() => {
              resolve(true);
            }).catch((err) => {
              reject(err);
            })
          }).catch((err) => {
            reject(err);
          })
      })
    })
    })
  }



  deletegroup() {
    return new Promise((resolve, reject) => {
      this.firegroup.child(firebase.auth().currentUser.uid).child(this.currentgroupname).child('members').once('value', (snapshot) => {
        var tempmembers = snapshot.val();

        for (var key in tempmembers) {
          this.firegroup.child(tempmembers[key].uid).child(this.currentgroupname).remove();
        }

        this.firegroup.child(firebase.auth().currentUser.uid).child(this.currentgroupname).remove().then(() => {
          resolve(true);
        }).catch((err) => {
          reject(err);
        })

      })
    })
  }



  addgroupmsg(newmessage) {
    return new Promise((resolve) => {

    this.firegroup.child(firebase.auth().currentUser.uid).child(this.currentgroupname).child('owner').once('value', async (snapshot) => {
      var tempowner = snapshot.val();
      this.firegroup.child(firebase.auth().currentUser.uid).child(this.currentgroupname).child('msgboard').child(await this.getIndex2()).set({
        sentby: firebase.auth().currentUser.uid,
        message: this.CaesarCipher(newmessage,13),
        timestamp: (Math.round((new Date()).getTime() / 1000)).toString().substr(0,10)
      }).then(async () => {
        if (tempowner != firebase.auth().currentUser.uid) {
          this.firegroup.child(tempowner).child(this.currentgroupname).child('msgboard').child(await this.getIndex3(tempowner)).set({
            sentby: firebase.auth().currentUser.uid,
            message: this.CaesarCipher(newmessage,13),
            timestamp: (Math.round((new Date()).getTime() / 1000)).toString().substr(0,10)
          })
        }
        var tempmembers = [];
        this.firegroup.child(tempowner).child(this.currentgroupname).child('members').once('value', (snapshot) => {
          var tempmembersobj = snapshot.val();
          for (var key in tempmembersobj)
            tempmembers.push(tempmembersobj[key]);
        }).then(() => {
          let postedmsgs = tempmembers.map((item) => {
            if (item.uid != firebase.auth().currentUser.uid) {
              return new Promise((resolve) => {
                this.postmsgs(item, newmessage, resolve);
              })
            }
          })
          Promise.all(postedmsgs).then(() => {
            this.getgroupmsgs(this.currentgroupname);
            resolve(true);
          })
        })
      })
    })
    })
  }

  async postmsgs(member, msg, cb) {
    this.firegroup.child(member.uid).child(this.currentgroupname).child('msgboard').child(await this.getIndex4(member)).set({
            sentby: firebase.auth().currentUser.uid,
            displayName: firebase.auth().currentUser.displayName,
            message: this.CaesarCipher(msg,13),
            timestamp: (Math.round((new Date()).getTime() / 1000)).toString().substr(0,10)
    }).then(() => {
      cb();
    })
  }

  getgroupmsgs(groupname) {
    this.firegroup.child(firebase.auth().currentUser.uid).child(groupname).child('owner').once('value', async (snapshot) => {
      var tempowner = snapshot.val();

      this.firegroup.child(tempowner).child(groupname).child('msgboard').on('value', (snapshot) => {
        var tempmsgholder = snapshot.val();
        this.groupmsgs = [];
        for (var key in tempmsgholder)
          this.groupmsgs.push(tempmsgholder[key]);
        this.events.publish('newgroupmsg');
      })
    })
  }





  async getIndex(){
    var found = false;
    var number = 0
    await this.firegroup.child(firebase.auth().currentUser.uid).child(this.currentgroupname).child('members').once('value', await async function(snapshot) {
      if (!snapshot.exists()) {
        number=0;
        found=true;
      }
    });

    while(!found)
    {
      await this.firegroup.child(firebase.auth().currentUser.uid).child(this.currentgroupname).child('members').child(number.toString()).once('value', await async function(snapshot) {
        if (!snapshot.exists()) {
          console.log('Found next index');
          found=true;
        }
        else{
          number= number +1;
        }
      });
    }
    return number.toString();
  }


  async getIndex2(){
    var found = false;
    var number = 0
    await this.firegroup.child(firebase.auth().currentUser.uid).child(this.currentgroupname).child('msgboard').once('value', await async function(snapshot) {
      if (!snapshot.exists()) {
        number=0;
        found=true;
      }
    });

    while(!found)
    {
      await this.firegroup.child(firebase.auth().currentUser.uid).child(this.currentgroupname).child('msgboard').child(number.toString()).once('value', await async function(snapshot) {
        if (!snapshot.exists()) {

          found=true;
        }
        else{
          number= number +1;
        }
      });
    }
    return number.toString();
  }


  async getIndex3(tempowner){
    var found = false;
    var number = 0
    await  this.firegroup.child(tempowner).child(this.currentgroupname).child('msgboard').once('value', await async function(snapshot) {
      if (!snapshot.exists()) {
        number=0;
        found=true;
      }
    });

    while(!found)
    {
      await this.firegroup.child(tempowner).child(this.currentgroupname).child('msgboard').child(number.toString()).once('value', await async function(snapshot) {
        if (!snapshot.exists()) {

          found=true;
        }
        else{
          number= number +1;
        }
      });
    }
    return number.toString();
  }

  async getIndex4(member){
    var found = false;
    var number = 0
    await  this.firegroup.child(member.uid).child(this.currentgroupname).child('msgboard').once('value', await async function(snapshot) {
      if (!snapshot.exists()) {
        number=0;
        found=true;
      }
    });

    while(!found)
    {
      await this.firegroup.child(member.uid).child(this.currentgroupname).child('msgboard').child(number.toString()).once('value', await async function(snapshot) {
        if (!snapshot.exists()) {

          found=true;
        }
        else{
          number= number +1;
        }
      });
    }
    return number.toString();
  }

  async getIndex5(person){
    var found = false;
    var number = 0
    await  this.firegroupname.child(person).once('value', await async function(snapshot) {
      if (!snapshot.exists()) {
        number=0;
        found=true;
      }
    });

    while(!found)
    {
      await this.firegroupname.child(person).child(number.toString()).once('value', await async function(snapshot) {
        if (!snapshot.exists()) {

          found=true;
        }
        else{
          number= number +1;
        }
      });
    }
    return number.toString();
  }

   async getSenders(groupname){
    return await new Promise((resolve, reject) => {;
    this.fireusername.child(groupname).once('value', async (snapshot) => {
      var tempowner = snapshot.val();
      this.sendersNames.push(tempowner.displayName);
      resolve(tempowner.displayName);
    })
  })
  }


  CaesarCipher(str, num) {
    // you can comment this line


    var result = '';
    var charcode = 0;

    for (var i = 0; i < str.length; i++) {
        charcode = (str[i].charCodeAt()) + num;
        result += String.fromCharCode(charcode);
    }
    return result;

}

 public download(fileName, filePath) {
    let url = encodeURI(filePath);
    this.fileTransfer = this.transfer.create();

    this.fileTransfer.download(url, this.file.externalRootDirectory + fileName, true).then((entry) => {
      //here logging our success downloaded file path in mobile.
      console.log('download completed: ' + entry.toURL());

      // open downloaded file
      this.downloadfile = entry.toURL();

    }).catch((error) => {
      //here logging an error.
      console.log('download failed: ' + JSON.stringify(error));
    });
  }
}