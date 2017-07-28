import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

import { CreateBusinessPage } from './create-business';

@NgModule({
    imports: [
        IonicPageModule.forChild(CreateBusinessPage)
    ],
    declarations: [CreateBusinessPage],
    entryComponents: [CreateBusinessPage]
})
export class CreateBusinessPageModule { }
