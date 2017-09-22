import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import {RectificationFeedbackPage} from "./rectification-feedback";

@NgModule({
    imports: [
        IonicPageModule.forChild(RectificationFeedbackPage)
    ],
    declarations: [RectificationFeedbackPage],
    entryComponents: [RectificationFeedbackPage]
})
export class RectificationAuditModule { }
