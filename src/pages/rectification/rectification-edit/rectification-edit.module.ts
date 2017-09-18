import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import {RectificationEditPage} from "./rectification-edit";

@NgModule({
    imports: [
        IonicPageModule.forChild(RectificationEditPage)
    ],
    declarations: [RectificationEditPage],
    entryComponents: [RectificationEditPage]
})
export class RectificationEditPageModule { }
