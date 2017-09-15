import {NgModule} from '@angular/core';
import {IonicPageModule} from 'ionic-angular';
import {RectificationAddPage} from "./rectification-add";

@NgModule({
  imports: [
    IonicPageModule.forChild(RectificationAddPage)
  ],
  declarations: [RectificationAddPage],
  entryComponents: [RectificationAddPage]
})
export class RectificationAddPageModule {
}
