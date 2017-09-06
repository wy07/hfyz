import { Vehicle } from './../../models/vehicle.model';
import { Company } from './../../models/company.model';
import { BaseComponent } from './../base/base';
import { Component } from '@angular/core';

/**
 * Generated class for the SearchVehicleComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'search-vehicle',
  templateUrl: 'search-vehicle.html'
})
export class SearchVehicleComponent extends BaseComponent {

  input: string;
  vehicles: Array<Vehicle>;
  filterVehicles: Array<Vehicle>;
  company: Company;

  ionViewDidLoad () {
    this.company = this.navParams.get('company');
    this.search();
    console.log("=======search vehicle=========" + JSON.stringify(this.company));
  }

  onInput () {
    console.log("==========onInput========"+ this.input);
    if (this.input === '') {
      this.filterVehicles = this.vehicles;
      return;
    }
    this.filterVehicles = this.vehicles.filter(
      (vehicle: Vehicle) => vehicle.vehicleNo.indexOf(this.input) > -1);
  }

  async search () {
    try {
      let res = await this.httpService.searchVehicles(this.company.companyCode);
      this.vehicles = res.cars;
      this.vehicles.map((vehicle: Vehicle) => {
        vehicle["checked"] = false;
      });
      this.filterVehicles = this.vehicles;
    } catch (error) {
      console.log(error);
    }
  }

  selected (vehicle: Vehicle) {
    this.viewCtrl.dismiss(vehicle);
  }

  dismiss () {
    this.viewCtrl.dismiss();
  }

  submit () {
    console.log(JSON.stringify(this.vehicles));
    let vehicleNos = [];
    this.vehicles.forEach((vehicle: Vehicle) => {
      if (vehicle["checked"]) vehicleNos.push(vehicle.vehicleNo);
    });
    if (vehicleNos.length > 0) this.viewCtrl.dismiss(vehicleNos);
  }

}
