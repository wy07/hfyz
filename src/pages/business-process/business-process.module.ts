import { ComponentsModule } from './../../components/components.module';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

import { BusinessProcessPage } from './business-process';
import {DirectivesModule} from "../../directives/directives.module";

@NgModule({
    imports: [
        ComponentsModule,
        IonicPageModule.forChild(BusinessProcessPage),
        DirectivesModule
    ],
    declarations: [BusinessProcessPage],
    entryComponents: [BusinessProcessPage]
})
export class BusinessProcessPageModule { }
