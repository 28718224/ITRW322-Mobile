import { Injectable } from '@angular/core';
import { Events } from 'ionic-angular';
import { connreq } from '../../models/interfaces/request';
import { UserProvider } from '../user/user';
import firebase from 'firebase';

/*
  Generated class for the RequestsProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class RequestsProvider {
  firereq = firebase.database().ref('/requests');
  firefriends = firebase.database().ref('/friends');

  userdetails;
  myfriends;
  constructor(public userservice: UserProvider, public events: Events) {

  }
  sendrequest(req: connreq) {
    var promise = new Promise(async (resolve, reject) => {
    this.firereq
    .child(req.recipient)
    .child(await this.getIndex(req)).set({
    sender: req.sender,
    })
    .then(() => {
    resolve({ success: true });
    })
    .catch(err => {
    resolve(err);
    });
    });
    return promise;
    }

    getmyrequests() {
    let allmyrequests;
    var myrequests = [];
    this.firereq.child(firebase.auth().currentUser.uid).on('value', (snapshot) => {
    allmyrequests = snapshot.val();
    myrequests = [];
    for (var i in allmyrequests) {
    myrequests.push(allmyrequests[i].sender);
    }
    this.userservice.getallusers().then((res) => {
    var allusers = res;
    this.userdetails = [];
    for (var j in myrequests)
    for (var key in allusers) {
    if (myrequests[j] === allusers[key].uid) {
    this.userdetails.push(allusers[key]);
    }
    }
    this.events.publish('gotrequests');
    })

    })
    }

    acceptrequest(buddy) {
    console.log('User: '+ firebase.auth().currentUser.uid);
    console.log('Buddy: '+ buddy.uid);
    var promise = new Promise(async (resolve, reject) => {
    this.myfriends = [];
    this.firefriends.child(firebase.auth().currentUser.uid).child(await this.getIndex2('1',buddy)).set({
    uid: buddy.uid
    }).then(async () => {
    this.firefriends.child(buddy.uid).child(await this.getIndex2('2',buddy)).set({
    uid: firebase.auth().currentUser.uid
    }).then(() => {
    this.deleterequest(buddy).then(() => {
    resolve(true);
    })

    }).catch((err) => {
    reject(err);
    })
    }).catch((err) => {
    reject(err);
    })
    })
    return promise;
    }
  deleterequest(buddy) {
    var promise = new Promise((resolve, reject) => {
     this.firereq.child(firebase.auth().currentUser.uid).orderByChild('sender').equalTo(buddy.uid).once('value', (snapshot) => {
          let somekey;
          for (var key in snapshot.val())
            somekey = key;
          this.firereq.child(firebase.auth().currentUser.uid).child(somekey).remove().then(() => {
            resolve(true);
          })
         })
          .then(() => {

        }).catch((err) => {
          reject(err);
        })
    })
    return promise;
  }

  getmyfriends() {
    let friendsuid = [];
    this.firefriends.child(firebase.auth().currentUser.uid).on('value', (snapshot) => {
      let allfriends = snapshot.val();
      this.myfriends = [];
      for (var i in allfriends)
        friendsuid.push(allfriends[i].uid);

      this.userservice.getallusers().then((users) => {
        this.myfriends = [];
        for (var j in friendsuid)
          for (var key in users) {
            if (friendsuid[j] === users[key].uid) {
              this.myfriends.push(users[key]);
            }
          }
        this.events.publish('friends');
      }).catch((err) => {
        alert(err);
      })

    })
  }



  async getIndex(req: connreq){
    var found = false;
    var number = 0;

    await this.firereq.child(req.recipient).once('value', await async function(snapshot) {
      if (!snapshot.exists()) {
        console.log('Not exists');
        number=0;
        found=true;
      }
    });

    while(!found)
    {
      await this.firereq.child(req.recipient).child(number.toString()).once('value', await async function(snapshot) {
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

async getIndex2(type:string, buddy){
  var found = false;
  var number = 0;
      if(type === '1')
      {
            await this.firefriends.child(firebase.auth().currentUser.uid).once('value', await async function(snapshot) {
              if (!snapshot.exists()) {

                number=0;
                found=true;
              }
            });

            while(!found)
            {
              await this.firefriends.child(firebase.auth().currentUser.uid).child(number.toString()).once('value', await async function(snapshot) {
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
      else{
        await this.firefriends.child(buddy.uid).once('value', await async function(snapshot) {
          if (!snapshot.exists()) {

            number=0;
            found=true;
          }
        });

        while(!found)
        {
          await this.firefriends.child(buddy.uid).child(number.toString()).once('value', await async function(snapshot) {
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

}
}