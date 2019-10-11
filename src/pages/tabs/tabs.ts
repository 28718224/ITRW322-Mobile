import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Events, ToastController } from 'ionic-angular';

/**
 * Generated class for the TabsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})
export class TabsPage {



  tab1: string = "ChatsPage";
  tab2: string = "GroupsPage";
  tab3: string = "CommandsPage";
  tab4: string = "ProfilePage";
  constructor(public events: Events,public toastController: ToastController) {
  }
  ngOninit(){
    this.events.subscribe('newgroupmsg', async () => {
      this.presentToast();
    })
  }
  async presentToast() {
    const toast = await this.toastController.create({
      message: 'New group message received.',
      duration: 2000
    });
    toast.present();
  }


}
