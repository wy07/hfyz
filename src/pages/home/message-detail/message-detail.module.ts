import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import {MessageDetailPage} from "./message-detail";


@NgModule({
    imports: [
        IonicPageModule.forChild(MessageDetailPage)
    ],
    declarations: [MessageDetailPage],
    entryComponents: [MessageDetailPage]
})
export class MessageDetailModule { }
