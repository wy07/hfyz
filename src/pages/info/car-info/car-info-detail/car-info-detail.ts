import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {CarBasicInfo} from "../../../../models/carBasicInfo.model";
import {BaseComponent} from "../../../../components/base/base";

/**
 * Generated class for the CarInfoDetailPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-car-info-detail',
  templateUrl: 'car-info-detail.html',
})
export class CarInfoDetailPage extends BaseComponent {
  id: number;
  car: CarBasicInfo;

  ionViewDidLoad() {
    console.log('ionViewDidLoad CarInfoDetailPage');
    console.log('id ---> ' + this.navParams.get("id"));
    this.id = this.navParams.get("id");
    this.getDetail();
  }

  async getDetail() {
    try {
      let res = await this.httpService.getCarDetail(this.id);
      this.car = res.car;
    } catch (error) {
      console.log(JSON.stringify(error));
    }
  }

}
