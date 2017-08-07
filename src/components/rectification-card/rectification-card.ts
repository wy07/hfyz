import { Rectification } from './../../models/rectification.model';
import { Component, Input } from '@angular/core';

/**
 * Generated class for the RectificationComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'rectification-component',
  templateUrl: 'rectification-card.html'
})
export class RectificationCardComponent {

  @Input() rectification: Rectification;

}
