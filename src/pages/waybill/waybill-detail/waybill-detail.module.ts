import { ComponentsModule } from './../../../components/components.module';
import { NgModule } from '@angular/core';
import { IonicPageModule} from 'ionic-angular';
import {WaybillDetailPage} from "./waybill-detail";

@NgModule({
  imports: [
    ComponentsModule,
    IonicPageModule.forChild(WaybillDetailPage)
  ],
  declarations: [WaybillDetailPage],
  entryComponents: [WaybillDetailPage]
})
export class WaybillListPageModule { }
