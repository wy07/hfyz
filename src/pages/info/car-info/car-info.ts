import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-car-info',
  templateUrl: 'car-info.html',
})
export class CarInfoPage {
  tabs: Array<{ title: string, page: string, type: string }>;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.tabs = [
      {title: '全部', page: 'CarInfoListPage', type: ''},
      {title: '班线客车', page: 'CarInfoListPage', type: 'bus'},
      {title: '旅游包车', page: 'CarInfoListPage', type: 'travel'},
      {title: '危货运输', page: 'CarInfoListPage', type: 'dgt'}
    ];
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CarInfoPage');
  }
}

