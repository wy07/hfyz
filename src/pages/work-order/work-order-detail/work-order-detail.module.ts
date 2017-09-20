import {NgModule} from "@angular/core";
import {IonicPageModule} from "ionic-angular";

import {WorkOrderDetailPage} from "./work-order-detail";

@NgModule({
  imports: [
    IonicPageModule.forChild(WorkOrderDetailPage)
  ],
  declarations: [WorkOrderDetailPage],
  entryComponents: [WorkOrderDetailPage]
})
export class WorkOrderDetailPageModule {
}
