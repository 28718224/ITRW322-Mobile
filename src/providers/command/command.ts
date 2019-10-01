import { Injectable } from '@angular/core';
import { Events } from 'ionic-angular';
import { connreq } from '../../models/interfaces/request';
import { UserProvider } from '../user/user';
import firebase from 'firebase';
import { stringify } from '@angular/core/src/util';

/*
  Generated class for the CommandProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/

@Injectable()
export class CommandProvider {
  firereq = firebase.database().ref('/commands');
  firefriends = firebase.database().ref('/friends');
  fireindex = firebase.database().ref('Index');

  constructor(public userservice: UserProvider, public events: Events) {

  }
  async sendcommand(req: connreq, cmd: string) {
    console.log( await this.getIndex(req));
      var promise = new Promise(async (resolve, reject) => {
        this.firereq
        .child(req.recipient)
        .child(await this.getIndex(req)) .set({
          sender: req.sender,
          Command: cmd,
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



}
