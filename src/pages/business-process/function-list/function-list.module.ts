import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

import { FunctionListPage } from './function-list';

@NgModule({
    imports: [
        IonicPageModule.forChild(FunctionListPage)
    ],
    declarations: [FunctionListPage],
    entryComponents: [FunctionListPage]
})
export class FunctionListPageModule { }
