import { EventbusProvider } from './../../providers/eventbus/eventbus';
import { UserDataProvider } from './../../providers/user-data/user-data';
import { HttpService } from './../../providers/http-service/http-service';
import { NavController, NavParams, App } from 'ionic-angular';
import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';

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

    public httpService: HttpService,
    public eventbusProvider: EventbusProvider,
    public userData: UserDataProvider
    ) {
  }

}
