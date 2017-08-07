import { LocalNotifications } from '@ionic-native/local-notifications';
import { NavController, NavParams, App, ViewController, Events } from 'ionic-angular';
import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { BackgroundMode } from '@ionic-native/background-mode';

import { EventbusProvider } from './../../providers/eventbus/eventbus';
import { UserDataProvider } from './../../providers/user-data/user-data';
import { HttpService } from './../../providers/http-service/http-service';

/**
 * Generated class for the BaseComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'base',
  template: ''
})
export class BaseComponent {

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public formBuilder: FormBuilder,
    public app: App,
    public localNotifications: LocalNotifications,
    public backgroundMode: BackgroundMode,
    public viewCtrl: ViewController,
    public events: Events,

    public httpService: HttpService,
    public eventbusProvider: EventbusProvider,
    public userData: UserDataProvider
    ) {
  }

}
