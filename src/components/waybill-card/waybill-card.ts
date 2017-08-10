import { FreightWaybill } from './../../models/freightWaybill.model';
import { Component, Input } from '@angular/core';

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

}
