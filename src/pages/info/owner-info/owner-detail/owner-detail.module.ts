import {NgModule} from "@angular/core";
import {IonicPageModule} from "ionic-angular";

import {OwnerDetailPage} from "./owner-detail";

@NgModule({
  imports: [
    IonicPageModule.forChild(OwnerDetailPage)
  ],
  declarations: [OwnerDetailPage],
  entryComponents: [OwnerDetailPage]
})
export class OwnerDetailPageModule {
}
