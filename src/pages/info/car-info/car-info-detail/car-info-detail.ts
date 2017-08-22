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
  frameNo: string;
  car: CarBasicInfo;

  ionViewDidLoad() {
    console.log('ionViewDidLoad CarInfoDetailPage');
    console.log('-------------------------');
    console.log('frameNo ---> ' + this.navParams.get("frameNo"));
    this.frameNo = this.navParams.get("frameNo");
    this.getDetail();
  }

  async getDetail() {
    try {
      let res = await this.httpService.getCarDetail(this.frameNo);
      this.car = res.data;
    } catch (error) {
      console.log(JSON.stringify(error));
    }
  }

}
