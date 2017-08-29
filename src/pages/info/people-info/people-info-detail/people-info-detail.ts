import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {BaseComponent} from "../../../../components/base/base";

@IonicPage()
@Component({
  selector: 'page-people-info-detail',
  templateUrl: 'people-info-detail.html',
})
export class PeopleInfoDetailPage extends BaseComponent {
  idCardNo: string;
  temp: string;
  items = [];

  ionViewDidLoad() {
    console.log('ionViewDidLoad PeopleInfoDetailPage');
    this.addItems(this.navParams.data.detailList);
  }

  addItems(data) {
    for (let i = 0; i < data.length; i++) {
      if (data[i].data)
        this.items.push(data[i]);
    }
  }

  accordion(index, temp) {
    this.temp = temp + index;
  }
}
