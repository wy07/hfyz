import { Company } from './../../../models/company.model';
import { Escort } from './../../../models/escort.model';
import { Driver } from './../../../models/driver.model';
import { FormGroup, Validators } from '@angular/forms';
import { Vehicle } from './../../../models/vehicle.model';
import { BaseComponent } from './../../../components/base/base';
import { Component, OnInit } from '@angular/core';
import { NavController, NavParams, IonicPage } from 'ionic-angular';

/**
 * Generated class for the CreateFreightWaybillPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-create-freight-waybill',
  templateUrl: 'create-freight-waybill.html',
})
export class CreateFreightWaybillPage extends BaseComponent implements OnInit {

  waybillForm: FormGroup;
  cityData: any[];
  vehicles: Array<Vehicle>;
  drivers: Array<Driver>;
  escorts: Array<Escort>;
  consignCompanys: Array<Company>;
  ways: Array<any>;

  ngOnInit () {
    this.waybillForm = this.formBuilder.group({
      vehicle: ['', Validators.required],

      emergencyPlan: ['', Validators.required],

      price: ['', Validators.required],
      mile: ['', Validators.required],
      amount: ['', Validators.required],
      loadedType: ['', Validators.required],
      fullLoaded: ['', Validators.required],
      departTime: ['', Validators.required],
      backTime: ['', Validators.required],
      consignCompany: ['', Validators.required],
      departArea: ['', Validators.required],
      arriveArea: ['', Validators.required],
      wayId: ['', Validators.required],

      driver: ['', Validators.required],
      escort: ['', Validators.required]
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CreateFreightWaybillPage');
    this.initData();
  }

  async initData () {
    try {
      let [cityDataRes, vehiclesRes, driversRes, escortsRes, consignCompanysRes] = await Promise.all([
        this.httpService.getCityPickerData(),
        this.httpService.getVehicles(),
        this.httpService.getDrivers(),
        this.httpService.getEscorts(),
        this.httpService.getConsignCompanys()
      ]);
      [this.cityData, this.vehicles, this.drivers, this.escorts, this.consignCompanys] =
        [cityDataRes, vehiclesRes.vehicles, driversRes.drivers, escortsRes.escorts, consignCompanysRes.consignCompanys];
    } catch (error) {
      console.log("error ---> " + JSON.stringify(error));
    }
  }

  /**
   * 城市选择器被改变时触发的事件
   * @param event
   */
  cityChange(event) {
    console.log(JSON.stringify(event));
    if(this.waybillForm.controls['departArea'].value !== '' &&
      this.waybillForm.controls['arriveArea'].value !== '') this.getWays();
  }

  async getWays () {
    try {
      let res = await this.httpService.getWays(
        this.waybillForm.controls['departArea'].value, this.waybillForm.controls['arriveArea'].value);
      this.ways = res.ways;
    } catch (error) {
      console.log("error ---> " + JSON.stringify(error));
    }
  }

  /**
   * 请求参数格式化
   */
  requestParamsFormat () {
    let params = this.waybillForm.value;
    params["vehicleId"] = params.vehicle.id;
    params["driverId"]  = params.driver.id;
    params["escortId"]  = params.escort.id;
    delete params['vehicle'];
    delete params['driver'];
    delete params['escort'];
    console.log("params ---> " + JSON.stringify(params));
    return params;
  }

  async createFreightWaybill () {
    try {
      let res = await this.httpService.createFreightWaybill(this.requestParamsFormat());
      console.log("========createFreightWaybill SUCCESS==========");
      this.navCtrl.pop();
    } catch (error) {
      console.log("error ---> " + JSON.stringify(error));
    }
  }

  submit () {
    console.log(this.waybillForm);
    console.log(JSON.stringify(this.waybillForm.value));
    if (this.waybillForm.valid) {
      this.createFreightWaybill();
    }
  }
}
