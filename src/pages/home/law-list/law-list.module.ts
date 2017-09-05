import {NgModule} from "@angular/core";
import {IonicPageModule} from "ionic-angular";
import {LawListPage} from "./law-list";

@NgModule({
  imports: [
    IonicPageModule.forChild(LawListPage)
  ],
  declarations: [LawListPage],
  entryComponents: [LawListPage]
})
export class LawListPageModule {
}
