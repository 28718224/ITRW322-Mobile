import { Component, ViewChild, NgZone } from '@angular/core';
import { IonicPage, NavController, NavParams, Events, Content, LoadingController } from 'ionic-angular';
import { ChatProvider } from '../../providers/chat/chat';
import { ImghandlerProvider } from '../../providers/imghandler/imghandler';
import firebase from 'firebase';
/**
 * Generated class for the BuddychatPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-buddychat',
  templateUrl: 'buddychat.html',
})
export class BuddychatPage {
  @ViewChild('content') content: Content;
  buddy: any;
  newmessage;
  allmessages = [];
  photoURL;
  imgornot;

  constructor(public navCtrl: NavController, public navParams: NavParams, public chatservice: ChatProvider,
    public events: Events, public zone: NgZone, public loadingCtrl: LoadingController,
    public imgstore: ImghandlerProvider) {
    this.buddy = this.chatservice.buddy;
    this.photoURL = firebase.auth().currentUser.photoURL;
    this.scrollto();
    this.events.subscribe('newmessage', () => {
      this.allmessages = [];

      this.imgornot = [];
      this.zone.run(() => {
        this.allmessages = this.chatservice.buddymessages;
        for (var key in this.allmessages) {
          var utcSeconds = this.allmessages[key].timestamp;
          var d = new Date(0); // The 0 there is the key, which sets the date to the epoch
          d.setUTCSeconds(utcSeconds);
          this.allmessages[key].timestamp = d.toString().substr(0, d.toString().indexOf('GMT')-1);


          if (this.allmessages[key].message.substring(0, 4) == this.CaesarCipher('http',13))
            this.imgornot.push(true);
          else
            this.imgornot.push(false);
            console.log(this.CaesarCipher(this.allmessages[key].message,-13));
        }
      })


    })
  }

  DownloadMedia(link){
    var utc = new Date().toJSON().slice(0,10).replace(/-/g,'/');
    this.chatservice.download(utc,'http://commondatastorage.googleapis.com/codeskulptor-assets/lathrop/asteroid_blue.png');
  }

  addmessage() {
    if(this.newmessage != ' '){
      this.chatservice.addnewmessage(this.newmessage).then(() => {
        this.content.scrollToBottom();
        this.newmessage = '';
      })
    }

  }

  ionViewDidEnter() {
    this.chatservice.getbuddymessages();
  }

  scrollto() {

      try{
        setTimeout(() => {
          this.content.scrollToBottom();
        }, 1000);
      }catch(err){

      }



  }

  sendPicMsg() {
    let loader = this.loadingCtrl.create({
      content: 'Please wait'
    });
    loader.present();
    this.imgstore.picmsgstore().then((imgurl) => {
      loader.dismiss();
      this.chatservice.addnewmessage(imgurl).then(() => {
        this.scrollto();
        this.newmessage = '';
      })
    }).catch((err) => {
      alert(err);
      loader.dismiss();
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
}
