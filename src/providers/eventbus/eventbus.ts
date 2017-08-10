import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

/*
  Generated class for the EventbusProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/

declare var vertx: any;

@Injectable()
export class EventbusProvider {

  eb = null;
  eventBusUrl = "http://192.168.2.116:8001/eventbus";

  register (numberPlate: string, callback) {
    if (typeof(this.eb) === 'undefined' || !this.eb) {
      console.log("==================");
      this.eb = new vertx.EventBus(this.eventBusUrl);
    }
    if ( this.eb.readyState() === vertx.EventBus.OPEN ) {
      this.eb.registerHandler('hfyz.data.' + numberPlate, callback);
    } else {
      let that = this;
      this.eb.onopen = function() {
        console.log("========onopen==========");
        that.eb.registerHandler('hfyz.data.' + numberPlate, callback);
      };
    }
  }

  close () {
    if (typeof (this.eb) !== 'undefined' && this.eb && this.eb.readyState() === vertx.EventBus.OPEN) {
        this.eb.close();
    }
    this.eb = null;
  }
}
