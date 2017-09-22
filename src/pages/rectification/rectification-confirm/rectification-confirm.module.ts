import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import {RectificationConfirmPage} from "./rectification-confirm";

@NgModule({
    imports: [
        IonicPageModule.forChild(RectificationConfirmPage)
    ],
    declarations: [RectificationConfirmPage],
    entryComponents: [RectificationConfirmPage]
})
export class RectificationConfirmModule { }
