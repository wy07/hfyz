import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

import { CreateFreightWaybillPage } from './create-freight-waybill';

@NgModule({
    imports: [
        IonicPageModule.forChild(CreateFreightWaybillPage)
    ],
    declarations: [CreateFreightWaybillPage],
    entryComponents: [CreateFreightWaybillPage]
})
export class WaybillPageModule { }
