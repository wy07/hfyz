import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import {RectificationAuditPage} from "./rectification-audit";


@NgModule({
    imports: [
        IonicPageModule.forChild(RectificationAuditPage)
    ],
    declarations: [RectificationAuditPage],
    entryComponents: [RectificationAuditPage]
})
export class RectificationAuditModule { }
