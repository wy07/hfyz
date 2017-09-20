import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

import {DirectivesModule} from "../../directives/directives.module";
import {MenuPage} from "./menu";

@NgModule({
    imports: [
        IonicPageModule.forChild(MenuPage),
        DirectivesModule
    ],
    declarations: [MenuPage],
    entryComponents: [MenuPage]
})
export class MenuPageModule { }
