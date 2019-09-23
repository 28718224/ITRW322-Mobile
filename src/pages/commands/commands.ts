import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, ActionSheet, ActionSheetController } from 'ionic-angular';
import { UserProvider } from '../../providers/user/user';
import { RequestsProvider } from '../../providers/requests/requests';
import { CommandProvider } from '../../providers/command/command';
import { connreq } from '../../models/interfaces/request';
import firebase from 'firebase';

/**
 * Generated class for the CommandsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-commands',
  templateUrl: 'commands.html',
})
export class CommandsPage {

  newrequest = {} as connreq;
  temparr = [];
  filteredusers = [];
  searchstring;
  constructor(public navCtrl: NavController, public navParams: NavParams,
    public userservice: UserProvider, public alertCtrl: AlertController,
    public requestservice: RequestsProvider,public actionSheet:ActionSheetController,
    public commandProvider: CommandProvider) {
    this.userservice.getallusers().then((res: any) => {
      this.filteredusers = res;
      this.temparr = res;
   })
  }

  ionViewDidLoad() {

  }

  searchuser(searchbar) {
    this.filteredusers = this.temparr;
    var q = searchbar.target.value;
    if (q.trim() == '') {
      return;
    }

    this.filteredusers = this.filteredusers.filter((v) => {
      if (v.displayName.toLowerCase().indexOf(q.toLowerCase()) > -1) {
        return true;
      }
      return false;
    })
  }

  sendcomm(recipient, cmd) {
    this.newrequest.sender = firebase.auth().currentUser.uid;
    this.newrequest.recipient = recipient.uid;

      let successalert = this.alertCtrl.create({
        title: 'Command sent',
        subTitle: 'Your command was sent to ' + recipient.displayName + 'a report on the command success should be in shortly',
        buttons: ['ok']
      });

      this.commandProvider.sendcommand(this.newrequest,cmd).then((res: any) => {
        if (res.success) {
          successalert.present();

        }
      }).catch((err) => {
        alert(err);
      })

  }

  presentCommandOptions(receiver) {
    let sheet = this.actionSheet.create({
      title: 'List of Commands',
      buttons: [
        {
          text: 'Shut Down PC',
          icon: 'ios-power',
          handler: () => {

            this.sendcomm(receiver, "ShutDown");
          }
        },
        {
          text: 'Sleep PC',
          icon: 'medkit',
          handler: () => {
            this.sendcomm(receiver, "Sleep");
          }
        },
        {
          text: 'Display Popup',
          icon: 'happy',
          handler: () => {
            let alert = this.alertCtrl.create({
              title: 'Message',
              inputs: [
                {
                  name: 'Message',
                  placeholder: 'Message'
                }],
                buttons: [
                  {
                    text: 'Send message',

                    handler: data => {
                      this.sendcomm(receiver, "ShowPopup=" +data.username);
                    }
                  }]});
                  alert.present();
          }
        },
        {
          text: 'View files of PC(Only if pc is on)',
          icon: 'folder',
          handler: () => {
            this.sendcomm(receiver, "ShowFileStructure");
          }
        }, {
          text: 'Cancel',
          icon: 'close',
          role: 'cancel',
        }
      ]
    })
    sheet.present();
  }




}