import { BaseComponent } from './../../../components/base/base';
import { Component } from '@angular/core';
import { NavController, NavParams, IonicPage } from 'ionic-angular';

/**
 * Generated class for the InfoListPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-info-list',
  templateUrl: 'info-list.html',
})
export class InfoListPage extends BaseComponent {

  ionViewDidLoad() {
    console.log(this.navCtrl);
    console.log(this.app.getRootNav());
  }

  goBack () {
    this.app.getRootNav().pop();
  }

}
