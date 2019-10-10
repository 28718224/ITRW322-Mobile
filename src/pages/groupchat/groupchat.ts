import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, ActionSheetController, LoadingController, Content, Events } from 'ionic-angular';
import { GroupsProvider } from '../../providers/groups/groups';
import { ImghandlerProvider } from '../../providers/imghandler/imghandler';
import firebase from 'firebase';

/**
 * Generated class for the GroupchatPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-groupchat',
  templateUrl: 'groupchat.html',
})
export class GroupchatPage {
  @ViewChild('content') content: Content;
  owner: boolean = false;
  groupName;
  newmessage;
  allgroupmsgs;
  alignuid;
  photoURL;
  imgornot;
  constructor(public navCtrl: NavController, public navParams: NavParams, public groupservice: GroupsProvider,
    public actionSheet: ActionSheetController, public events: Events, public imgstore: ImghandlerProvider, public loadingCtrl: LoadingController) {
    this.alignuid = firebase.auth().currentUser.uid;
    this.photoURL = firebase.auth().currentUser.photoURL;
    this.groupName = this.navParams.get('groupName');
    this.groupservice.getownership(this.groupName).then((res) => {
      if (res)
        this.owner = true;
    }).catch((err) => {
      alert(err);
      })
    this.groupservice.getgroupmsgs(this.groupName);
    this.events.subscribe('newgroupmsg', () => {
      this.allgroupmsgs = [];
      this.imgornot = [];
      this.allgroupmsgs = this.groupservice.groupmsgs;
      for (var key in this.allgroupmsgs) {
      /*  var d = new Date(this.allgroupmsgs[key].timestamp);
        var hours = d.getHours();
        var minutes = "0" + d.getMinutes();
        var month = d.getMonth();
        var da = d.getDate();

        var monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
          "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

        var formattedTime = monthNames[month] + "-" + da + "-" + hours + ":" + minutes.substr(-2);*/
        var utcSeconds = this.allgroupmsgs[key].timestamp;
        var d = new Date(0); // The 0 there is the key, which sets the date to the epoch
        d.setUTCSeconds(utcSeconds);

        this.allgroupmsgs[key].timestamp = d.toString().substr(0, d.toString().indexOf('GMT')-1);
        if (this.allgroupmsgs[key].message.substring(0, 4) === this.CaesarCipher('http',13)) {
          this.imgornot.push(true);
        }
        else {
          this.imgornot.push(false);
        }
      }
      try{
        this.scrollto();
      }catch(err){

      }

    })

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GroupchatPage');
  }

  sendpicmsg() {
    let loader = this.loadingCtrl.create({
      content: 'Please wait'
    });
    loader.present();
    this.imgstore.picmsgstore().then((imgurl) => {
      loader.dismiss();
      this.groupservice.addgroupmsg(imgurl).then(() => {
        try{
          this.scrollto();
        }catch(err){

        }
        this.newmessage = '';
      })
    }).catch((err) => {
      alert(err);
      loader.dismiss();
    })
  }

  presentOwnerSheet() {
    let sheet = this.actionSheet.create({
      title: 'Group Actions',
      buttons: [
        {
          text: 'Add member',
          icon: 'person-add',
          handler: () => {
            this.navCtrl.push('GroupbuddiesPage');
          }
        },
        {
          text: 'Remove member',
          icon: 'remove-circle',
          handler: () => {
            this.navCtrl.push('GroupmembersPage');
          }
        },
        {
          text: 'Group Info',
          icon: 'person',
          handler: () => {
            this.navCtrl.push('GroupinfoPage', {groupName: this.groupName});
          }
        },
        {
          text: 'Delete Group',
          icon: 'trash',
          handler: () => {
            this.groupservice.deletegroup().then(() => {
              this.navCtrl.pop();
            }).catch((err) => {
              console.log(err);
            })
          }
        },
        {
          text: 'Cancel',
          role: 'cancel',
          icon: 'cancel',
          handler: () => {
            console.log('Cancelled');
          }
        }
      ]
    })
    sheet.present();
  }

  presentMemberSheet() {
    let sheet = this.actionSheet.create({
      title: 'Group Actions',
      buttons: [
        {
          text: 'Leave Group',
          icon: 'log-out',
          handler: () => {
            this.groupservice.leavegroup().then(() => {
              this.navCtrl.pop();
            }).catch((err) => {
              console.log(err);
            })
          }
        },
        {
          text: 'Group Info',
          icon: 'person',
          handler: () => {
            this.navCtrl.push('GroupinfoPage', {groupName: this.groupName});
          }
        },
        {
          text: 'Cancel',
          role: 'cancel',
          icon: 'cancel',
          handler: () => {
            console.log('Cancelled');
          }
        }
      ]
    })
    sheet.present();
  }

  addgroupmsg() {
    if(this.newmessage.length !=" "){
      this.groupservice.addgroupmsg(this.newmessage).then(() => {
        this.scrollto();
        this.newmessage = '';
      })
    }

  }

  scrollto() {
    try{
      setTimeout(() => {
        this.content.scrollToBottom();
      }, 1000);
    } catch(err){

    }

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

}