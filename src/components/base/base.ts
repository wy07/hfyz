import { MapProvider } from './../../providers/map/map';
import { LocalNotifications } from '@ionic-native/local-notifications';
import {NavController, NavParams, App, ViewController, Events, ModalController, ToastController} from 'ionic-angular';
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
    public modalCtrl: ModalController,

    public httpService: HttpService,
    public eventbusProvider: EventbusProvider,
    public userData: UserDataProvider,
    public mapProvider: MapProvider,
    public toastCtrl: ToastController
    ) {
  }

  public SHOW_TOP : string = 'top';
  public SHOW_MIDDLE : string = 'middle';
  public SHOW_BOTTOM : string = 'bottom';

  /**
   * 显示Toast
   * @param {string} message 显示的消息
   * @param {number} duration 持续时间
   * @param {string} position 出现位置，可接收的参数为"top", "middle", "bottom"
   */
  public showToast(message:string, duration:number, position:string) {
    let toast = this.toastCtrl.create({
      message: message,
      duration: duration,
      position: position
    });
    toast.present(toast);
  }

}
