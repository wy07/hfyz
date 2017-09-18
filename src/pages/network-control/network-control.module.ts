import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

import { NetworkControlPage } from './network-control';
import {DirectivesModule} from "../../directives/directives.module";

@NgModule({
    imports: [
        IonicPageModule.forChild(NetworkControlPage),
        DirectivesModule
    ],
    declarations: [NetworkControlPage],
    entryComponents: [NetworkControlPage]
})
export class NetworkControlPageModule { }
