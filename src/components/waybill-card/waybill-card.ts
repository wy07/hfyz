import {FreightWaybill} from './../../models/freightWaybill.model';
import {Component, EventEmitter, Input, Output} from '@angular/core';

/**
 * Generated class for the WaybillCardComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'waybill-card',
  templateUrl: 'waybill-card.html'
})
export class WaybillCardComponent {

  @Input() waybill: FreightWaybill;
  @Output() parentClick = new EventEmitter()

  submit(id) {
    this.parentClick.emit(id);
    console.log('--id--' + id);
  }

}
