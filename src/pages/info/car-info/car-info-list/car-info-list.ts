import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {BaseComponent} from "../../../../components/base/base";
import {CarBasicInfo} from "../../../../models/carBasicInfo.model";

@IonicPage()
@Component({
  selector: 'page-car-info-list',
  templateUrl: 'car-info-list.html',
})
export class CarInfoListPage extends BaseComponent {
  input: string;
  searchCars: Array<CarBasicInfo>;
  carType: string;
  carList: Array<CarBasicInfo>;

  ionViewDidLoad() {
    console.log('ionViewDidLoad CarInfoListPage');
    this.carType = this.navParams.data;
    this.doRefresh();
  }

  onInput() {
    if (this.input === '') {
      this.searchCars = this.carList;
      return;
    }
    this.searchCars = this.carList.filter(
      (car: CarBasicInfo) => car.licenseNo.indexOf(this.input) > -1);
  }

  doRefresh(refresher?) {
    this.carList = [];
    this.getCars(this.carType).then((carList: Array<CarBasicInfo>) => {
      this.carList = carList;
      this.searchCars = this.carList;
      if (refresher) refresher.complete();
    }, err => {
      if (refresher) refresher.complete();
    });
  }

  async getCars(carType: string) {
    try {
      let res = await this.httpService.getCars(carType);
      return res.carList;
    } catch (error) {
      console.log("err--->" + JSON.stringify(error));
    }
  }

  goToCarInfoDetail(car: CarBasicInfo) {
    this.app.getRootNav().push('CarInfoDetailPage', {id: car.id});
  }
}
