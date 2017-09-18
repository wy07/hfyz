import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

import { FunctionListPage } from './function-list';
import {DirectivesModule} from "../../../directives/directives.module";

@NgModule({
    imports: [
        IonicPageModule.forChild(FunctionListPage),
        DirectivesModule
    ],
    declarations: [FunctionListPage],
    entryComponents: [FunctionListPage]
})
export class FunctionListPageModule { }
