import { FormGroup, Validators } from '@angular/forms';
import { BaseComponent } from './../base/base';
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
export class SearchTrackComponent extends BaseComponent {

  trackForm: FormGroup;

  ngOnInit () {
    this.trackForm = this.formBuilder.group({
      query: ['', Validators.required],
      startDate: ['', Validators.required],
      endDate: ['', Validators.required]
    });
  }

  submit () {
    console.log(this.trackForm.value);
    if (this.trackForm.valid) {
      console.log("======success=======");
      this.searchTrack();
    }
  }

  async searchTrack () {
    try {
      let res = await this.httpService.searchTrack(this.trackForm.value);
      this.viewCtrl.dismiss(res.points);
    } catch (error) {
      console.log(JSON.stringify(error));
    }
  }

  dismiss () {
    this.viewCtrl.dismiss();
  }

}
