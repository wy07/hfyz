/**
 * Created by wy on 2017/9/19.
 */
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

import {WorkOrderPage} from "./work-order";


@NgModule({
  imports: [
    IonicPageModule.forChild(WorkOrderPage)
  ],
  declarations: [WorkOrderPage],
  entryComponents: [WorkOrderPage]
})
export class WorkOrderPageModule { }
