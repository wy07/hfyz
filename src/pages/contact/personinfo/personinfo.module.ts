import {NgModule} from '@angular/core';
import {IonicPageModule} from 'ionic-angular';
import {PersonInfoPage} from "./personinfo";

@NgModule({
  imports: [
    IonicPageModule.forChild(PersonInfoPage)
  ],
  declarations: [PersonInfoPage],
  entryComponents: [PersonInfoPage]
})
export class PersoninfoModule {
}
