import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Events, ToastController } from 'ionic-angular';
import { GroupsProvider } from '../../providers/groups/groups';


@IonicPage()
@Component({
  selector: 'page-groupmembers',
  templateUrl: 'groupmembers.html',
})
export class GroupmembersPage {
  groupmembers;
  tempgrpmembers;
  constructor(public navCtrl: NavController, public navParams: NavParams, public groupservice: GroupsProvider,
              public events: Events ,public toastcontroller:ToastController) {
  }

  ionViewWillEnter() {
    this.groupmembers = this.groupservice.currentgroup;
    this.tempgrpmembers = this.groupmembers;
    this.events.subscribe('gotintogroup', () => {
      this.groupmembers = this.groupservice.currentgroup;
      this.tempgrpmembers = this.groupmembers;
    })

  }

  ionViewWillLeave() {
    this.events.unsubscribe('gotintogroups');
  }

  searchuser(searchbar) {
    let tempmembers = this.tempgrpmembers;

    var q = searchbar.target.value;

    if (q.trim() === '') {
      this.groupmembers = this.tempgrpmembers;
      return;
    }

    tempmembers = tempmembers.filter((v) => {
      if (v.displayName.toLowerCase().indexOf(q.toLowerCase()) > -1) {
        return true;
      }
      return false;
    })

    this.groupmembers = tempmembers;

  }

  removemember(member) {
    this.groupservice.deletemember(member);
    let sentuser = this.tempgrpmembers.indexOf(member);
          this.tempgrpmembers.splice(sentuser, 1);
          this.presentToast();
  }
  async presentToast() {
    const toast = await this.toastcontroller.create({
      message: 'Member removed.',
      duration: 2000
    });
    toast.present();
  }

}