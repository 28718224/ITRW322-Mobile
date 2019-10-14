import { Injectable } from '@angular/core';
import firebase from 'firebase';
import { Events, ToastController } from 'ionic-angular';
import { FileTransfer, FileTransferObject } from '@ionic-native/file-transfer';
import { File } from '@ionic-native/file';
/*
  Generated class for the ChatProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class ChatProvider {
  firebuddychats = firebase.database().ref('/buddychats');
  buddy: any;
  downloadfile:any;
  buddymessages = [];
  private fileTransfer: FileTransferObject;
  constructor(public events: Events, private transfer: FileTransfer ,private file: File, private toastController:ToastController) {
    this.events.subscribe('newmessage:' + firebase.auth().currentUser.uid, () => {
      this.presentToast();
     })
  }
  async presentToast() {
    const toast = await this.toastController.create({
      message: 'New personal Message received',
      duration: 2000
    });
    toast.present();
  }

  initializebuddy(buddy) {
    this.buddy = buddy;
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

  addnewmessage(msg) {
    if (this.buddy) {
      var promise = new Promise(async (resolve, reject) => {
        this.firebuddychats.child(firebase.auth().currentUser.uid).child(this.buddy.uid).child(await this.getIndex2('1')).set({
          sentby: firebase.auth().currentUser.uid,
          message: this.CaesarCipher(msg,13),
          timestamp: (Math.round((new Date()).getTime() / 1000)).toString().substr(0,10)
        }).then(async () => {
          this.firebuddychats.child(this.buddy.uid).child(firebase.auth().currentUser.uid).child(await this.getIndex2('2')).set({
            sentby: firebase.auth().currentUser.uid,
            message: this.CaesarCipher(msg,13),
            timestamp: (Math.round((new Date()).getTime() / 1000)).toString().substr(0,10)
          }).then(() => {
            this.events.publish('newmessage:' + this.buddy);
            resolve(true);

          })
        })
      })
      return promise;
    }
  }

  getbuddymessages() {

    let temp;
    this.firebuddychats.child(firebase.auth().currentUser.uid).child(this.buddy.uid).on('value', (snapshot) => {
      this.buddymessages = [];
      temp = snapshot.val();
      for (var tempkey in temp) {

        this.buddymessages.push(temp[tempkey]);
      }
      this.events.publish('newmessage');

    })
  }



  async getIndex2(type:string){
    var found = false;
    var number = 0;
        if(type === '1')
        {
              await this.firebuddychats.child(firebase.auth().currentUser.uid).child(this.buddy.uid).once('value', await async function(snapshot) {
                if (!snapshot.exists()) {

                  number=0;
                  found=true;
                }
              });

              while(!found)
              {
                await this.firebuddychats.child(firebase.auth().currentUser.uid).child(this.buddy.uid).child(number.toString()).once('value', await async function(snapshot) {
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
          await this.firebuddychats.child(this.buddy.uid).child(firebase.auth().currentUser.uid).once('value', await async function(snapshot) {
            if (!snapshot.exists()) {

              number=0;
              found=true;
            }
          });

          while(!found)
          {
            await this.firebuddychats.child(this.buddy.uid).child(firebase.auth().currentUser.uid).child(number.toString()).once('value', await async function(snapshot) {
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

  public download(fileName, filePath) {
    let url = encodeURI(filePath);
    this.fileTransfer = this.transfer.create();

    this.fileTransfer.download(url, this.file.dataDirectory   + fileName, true).then((entry) => {
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