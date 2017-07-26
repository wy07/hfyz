import { Component } from '@angular/core';
import { NavController, IonicPage } from 'ionic-angular';

declare var mapObject;

var maplet = null;//定义地图对象
@IonicPage()
@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  constructor(public navCtrl: NavController) {
    // this.initMap();
  }

  ionViewDidLoad () {
    mapObject.initMap('mapbar');
  }

}
