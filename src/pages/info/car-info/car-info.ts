import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';

/**
 * Generated class for the CarInfoPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-car-info',
  templateUrl: 'car-info.html',
})
export class CarInfoPage {

  tabs: Array<{ title: string, page: string, type: string }>;


  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.tabs = [
      {title: '全部', page: 'CarInfoListPage', type: 'all'},
      {title: '班线客车', page: 'CarInfoListPage', type: 'DFK'},
      {title: '旅游包车', page: 'CarInfoListPage', type: 'DQR'},
      {title: '危货运输', page: 'CarInfoListPage', type: 'YWC'}
    ];

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CarInfoPage');
  }


}

