import { ComponentsModule } from './../../../components/components.module';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

import { WaybillListPage } from './waybill-list';

@NgModule({
    imports: [
        ComponentsModule,
        IonicPageModule.forChild(WaybillListPage)
    ],
    declarations: [WaybillListPage],
    entryComponents: [WaybillListPage]
})
export class WaybillListPageModule { }
