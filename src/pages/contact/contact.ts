import { Component } from '@angular/core';
import { NavController, IonicPage } from 'ionic-angular';
import {BaseComponent} from "../../components/base/base";

@IonicPage()
@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage extends BaseComponent {

  private mUserName: string = this.userData.getUserName();

  private goToFixPage() {
    this.navCtrl.push("ChangePwdPage");
  }

  private goToPersonInfoPage() {
    this.navCtrl.push("PersonInfoPage");
  }

  private loginOut() {
    this.userData.clearLoginData();
    this.navCtrl.push('LoginPage');
  }

}
