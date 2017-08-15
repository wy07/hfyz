import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CityPickerModule } from  "ionic2-city-picker";

import { CreateFreightWaybillPage } from './create-freight-waybill';

@NgModule({
    imports: [
        CityPickerModule,
        IonicPageModule.forChild(CreateFreightWaybillPage)
    ],
    declarations: [CreateFreightWaybillPage],
    entryComponents: [CreateFreightWaybillPage]
})
export class WaybillPageModule { }
