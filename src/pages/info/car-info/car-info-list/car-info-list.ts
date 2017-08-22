import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {BaseComponent} from "../../../../components/base/base";
import {CarBasicInfo} from "../../../../models/carBasicInfo.model";

/**
 * Generated class for the CarInfoListPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-car-info-list',
  templateUrl: 'car-info-list.html',
})
export class CarInfoListPage extends BaseComponent {
  max: number = 10;
  offset: number = 0;
  total: number;
  carList: Array<CarBasicInfo>;

  ionViewDidLoad() {
    console.log('ionViewDidLoad CarInfoListPage');
    this.doRefresh();
  }

  doRefresh(refresher?) {
    console.log('-----------------------');
    this.carList = [];
    this.offset = 0;
    this.getCars().then((carList: Array<CarBasicInfo>) => {
      this.carList = carList;
      if (refresher) refresher.complete();
    }, err => {
      if (refresher) refresher.complete();
    });
  }

  async getCars() {
    try {
      let res = await this.httpService.getCars();
      // this.total  = res.total;
      // this.offset += res.cars.length;
      return res.carList;
    } catch (error) {
      console.log("err--->" + JSON.stringify(error));
    }
  }

  goToCarInfoDetail(car: CarBasicInfo) {
    this.app.getRootNav().push('CarInfoDetailPage', {frameNo: car.frameNo});
  }

}
