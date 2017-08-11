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

  ngOnInit () {
    this.waybillForm = this.formBuilder.group({
      vehicle: ['', Validators.required],
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
      let [cityDataRes, vehiclesRes, driversRes, escortsRes] = await Promise.all([
        this.httpService.getCityPickerData(),
        this.httpService.getVehicles(),
        this.httpService.getDrivers(),
        this.httpService.getEscorts()
      ]);
      [this.cityData, this.vehicles, this.drivers, this.escorts] =
        [cityDataRes, vehiclesRes.vehicles, driversRes.drivers, escortsRes.escorts];
    } catch (error) {
      console.log("error ---> " + JSON.stringify(error));
    }
  }

  submit () {
    console.log(this.waybillForm);
    console.log(JSON.stringify(this.waybillForm.value));
  }
}
