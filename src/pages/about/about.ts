import { BaseComponent } from './../../components/base/base';
import { Component } from '@angular/core';
import { NavController, IonicPage } from 'ionic-angular';

declare var mapObject;

@IonicPage()
@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage extends BaseComponent {

  ionViewDidLoad () {
    mapObject.initMap('mapbar');
    this.eventbusProvider.register('皖A7S298', res => {
      console.log("eventbus ---> " + JSON.stringify(res));
      mapObject.play(res.msg);
    });
  }

}
