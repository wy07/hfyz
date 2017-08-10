import { BaseComponent } from './../../../components/base/base';
import { Component } from '@angular/core';
import { NavController, NavParams, IonicPage } from 'ionic-angular';

/**
 * Generated class for the CreateBusinessPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-create-business',
  templateUrl: 'create-business.html',
})
export class CreateBusinessPage extends BaseComponent {

  ionViewDidLoad() {
    console.log('ionViewDidLoad CreateBusinessPage');
  }

  navigateToCreateFreightWaybillPage () {
    this.navCtrl.push('CreateFreightWaybillPage');
  }

}
