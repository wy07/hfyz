import { BaseComponent } from './../../components/base/base';
import { Component } from '@angular/core';
import { NavController, IonicPage } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage extends BaseComponent {

  ionViewDidLoad() {
    console.log(this.navCtrl);
  }

  goToInfoQueryPage () {
    this.app.getRootNav().push('InfoQueryPage');
  }

}
