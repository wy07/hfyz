import {SearchVehicleComponent} from './search-vehicle/search-vehicle';
import {SearchTrackComponent} from './search-track/search-track';
import {WaybillCardComponent} from './waybill-card/waybill-card';
import {SearchCompanyComponent} from './search-company/search-company';
import {NgModule} from '@angular/core';
import {IonicModule} from 'ionic-angular';

import {BaseComponent} from './base/base';
import {RectificationCardComponent} from './rectification-card/rectification-card';
import {SearchComponent} from "./search-rectification/search-rectification";

@NgModule({
  imports: [IonicModule],
  exports: [
    BaseComponent,
    RectificationCardComponent,
    SearchCompanyComponent,
    WaybillCardComponent,
    SearchTrackComponent,
    SearchVehicleComponent,
    SearchComponent
  ],
  declarations: [
    BaseComponent,
    RectificationCardComponent,
    SearchCompanyComponent,
    WaybillCardComponent,
    SearchTrackComponent,
    SearchVehicleComponent,
    SearchComponent
  ],
  entryComponents: [
    BaseComponent,
    RectificationCardComponent,
    SearchCompanyComponent,
    WaybillCardComponent,
    SearchTrackComponent,
    SearchVehicleComponent,
    SearchComponent
  ]
})
export class ComponentsModule {
}
