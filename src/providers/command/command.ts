import { Injectable } from '@angular/core';
import { Events } from 'ionic-angular';
import { connreq } from '../../models/interfaces/request';
import { UserProvider } from '../user/user';
import firebase from 'firebase';

/*
  Generated class for the CommandProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class CommandProvider {
  firereq = firebase.database().ref('/commands');
  firefriends = firebase.database().ref('/friends');
  constructor(public userservice: UserProvider, public events: Events) {

  }
  sendcommand(req: connreq, cmd: string) {
    var promise = new Promise((resolve, reject) => {
    this.firereq
    .child(req.recipient)
    .push().set({
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
}
