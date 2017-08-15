import { Component } from '@angular/core';

/**
 * Generated class for the SearchTrackComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'search-track',
  templateUrl: 'search-track.html'
})
export class SearchTrackComponent {

  text: string;

  constructor() {
    console.log('Hello SearchTrackComponent Component');
    this.text = 'Hello World';
  }

}
