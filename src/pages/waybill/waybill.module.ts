import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

import { WaybillPage } from './waybill';

@NgModule({
    imports: [
        IonicPageModule.forChild(WaybillPage)
    ],
    declarations: [WaybillPage],
    entryComponents: [WaybillPage]
})
export class WaybillPageModule { }
