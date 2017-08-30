import { Component } from '@angular/core';
import { NavController, IonicPage } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {

  constructor(public navCtrl: NavController) {

  }

  goToFixPage() {
    this.navCtrl.push("FixPasswordPage");
  }

  goToPersonInfoPage() {
    this.navCtrl.push("PersonInfoPage");
  }
}
