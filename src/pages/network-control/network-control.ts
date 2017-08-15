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

  result = [
    {
      "dateStr":"2017-07-17 19:09:17",
      "plateColor":2,
      "plateNo":"京G79489",
      "posEncrypt":0,
      "geoPoint":"117.126825,31.852466",
      "gpsSpeed":0,
      "totalMileage":129806,
      "recSpeed":0,
      "direction":77,
      "altitude":0,
      "vehicleState":786451,
      "alarmState":1
    },
    {
      "dateStr":"2017-07-17 19:10:59",
      "plateColor":3,
      "plateNo":"京G00000",
      "posEncrypt":0,
      "geoPoint":"117.128825,31.854466",
      "gpsSpeed":88,
      "totalMileage":129806,
      "recSpeed":0,
      "direction":77,
      "altitude":0,
      "vehicleState":786451,
      "alarmState":0
    }
  ];

  ionViewDidLoad () {
    // this.eventbusProvider.register('皖N32076', res => {
    //   console.log("eventbus ---> " + JSON.stringify(res));
    //   mapObject.play(res.msg);
    // });
    this.mapProvider.initMap();
    setTimeout(() => {
      for(let v of this.result) {
        this.mapProvider.refresh(v);
      }
      // this.mapProvider.play(this.result[0], this.infoWindowHtml(this.result[0]));
    }, 2000);
  }

  openNativeMap () {
    Mapbar.initMap();
  }

}
