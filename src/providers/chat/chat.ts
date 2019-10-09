import { Injectable } from '@angular/core';
import firebase from 'firebase';
import { Events } from 'ionic-angular';

/*
  Generated class for the ChatProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class ChatProvider {
  firebuddychats = firebase.database().ref('/buddychats');
  buddy: any;
  buddymessages = [];
  constructor(public events: Events) {

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
          timestamp: firebase.database.ServerValue.TIMESTAMP
        }).then(async () => {
          this.firebuddychats.child(this.buddy.uid).child(firebase.auth().currentUser.uid).child(await this.getIndex2('2')).set({
            sentby: firebase.auth().currentUser.uid,
            message: this.CaesarCipher(msg,13),
            timestamp: firebase.database.ServerValue.TIMESTAMP
          }).then(() => {
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
}