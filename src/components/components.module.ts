import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';

import { BaseComponent } from './base/base';
import { RectificationComponent } from './rectification/rectification';

@NgModule({
    imports: [IonicModule],
    exports: [BaseComponent, RectificationComponent],
    declarations: [BaseComponent, RectificationComponent],
    entryComponents: [BaseComponent, RectificationComponent]
})
export class ComponentsModule { }
