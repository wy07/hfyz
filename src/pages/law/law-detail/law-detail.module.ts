import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import {LawDetailPage} from "./law-detail";

@NgModule({
  imports: [
    IonicPageModule.forChild(LawDetailPage)
  ],
  declarations: [LawDetailPage],
  entryComponents: [LawDetailPage]
})
export class LawDetailPageModule { }
