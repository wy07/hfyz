import { Vehicle } from './../../models/vehicle.model';
import { SearchCompanyComponent } from './../../components/search-company/search-company';
import { SearchVehicleComponent } from './../../components/search-vehicle/search-vehicle';
import { SearchTrackComponent } from './../../components/search-track/search-track';
import { BaseComponent } from './../../components/base/base';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { NavController, IonicPage } from 'ionic-angular';

declare var Mapbar: any;

@IonicPage()
@Component({
  selector: 'network-control',
  templateUrl: 'network-control.html'
})
export class NetworkControlPage extends BaseComponent {

  ionViewDidLoad () {
    this.mapProvider.initMap();
  }

  openNativeMap () {
    Mapbar.initMap();
  }

  searchTrack () {
    let searchTrackModal = this.modalCtrl.create(SearchTrackComponent);
    searchTrackModal.onDidDismiss(points => {
      // console.log("------- searchTrackModal ------" + JSON.stringify(points));
      if (points) {
        this.mapProvider.reload();
        this.mapProvider.track(points);
      }
    });
    searchTrackModal.present();
  }

  searchCompany () {
    let searchCompanyModal = this.modalCtrl.create(SearchCompanyComponent, {from: "NetworkControlPage"});
    searchCompanyModal.onDidDismiss((vehicleNos: Array<String>) => {
      if (vehicleNos) {
        this.eventbusProvider.close();
        console.log(" ----- NetworkControlPage ---- " + JSON.stringify(vehicleNos));
        this.mapProvider.reload();
        // setTimeout(() => {
        //   for(let v of this.result) {
        //     this.mapProvider.refresh(v);
        //   }
        // }, 2000);
        vehicleNos.forEach((vehicleNo: string) => {
          this.registerEventbus(vehicleNo);
        });
      }
    });
    searchCompanyModal.present();
  }

  registerEventbus (vehicleNo: string) {
    console.log(" ----- registerEventbus ---- " + vehicleNo);
    this.eventbusProvider.register(vehicleNo, res => {
      console.log("eventbus ---> " + JSON.stringify(res));
      this.mapProvider.refresh(res.msg);
    });
  }

  mapZoomIn () {
    this.mapProvider.zoomIn();
  }

  mapZoomOut () {
    this.mapProvider.zoomOut();
  }
}
