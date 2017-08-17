import { ComponentsModule } from './../../components/components.module';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

import { BusinessProcessPage } from './business-process';

@NgModule({
    imports: [
        ComponentsModule,
        IonicPageModule.forChild(BusinessProcessPage)
    ],
    declarations: [BusinessProcessPage],
    entryComponents: [BusinessProcessPage]
})
export class BusinessProcessPageModule { }
