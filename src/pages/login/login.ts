import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { usercreds } from '../../models/interfaces/usercreds';

import { AuthProvider } from '../../providers/auth/auth';

/**
 * Generated class for the LoginPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  credentials = {} as usercreds;
  constructor(public navCtrl: NavController, public navParams: NavParams, public authservice: AuthProvider) {
  }

  ionViewDidLoad() {

  console.log(this.CaesarCipher('Hey karton what is up', 13));
  console.log(this.CaesarCipher(this.CaesarCipher('Hey karton what is up', 13), -13));

  }
   CaesarCipher(str, num) {
    // you can comment this line
    str = str.toLowerCase();

    var result = '';
    var charcode = 0;

    for (var i = 0; i < str.length; i++) {
        charcode = (str[i].charCodeAt()) + num;
        result += String.fromCharCode(charcode);
    }
    return result;

}

  signin() {
    this.authservice.login(this.credentials).then((res: any) => {
      if (!res.code)
        this.navCtrl.setRoot('TabsPage');
      else
        alert(res);
    })
  }


  passwordreset() {
  this.navCtrl.push('PasswordresetPage');
  }

  signup() {
    this.navCtrl.push('SignupPage');
  }
}
