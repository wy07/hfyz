import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';

import { HasPermissionDirective } from './has-permission/has-permission';

@NgModule({
    exports: [HasPermissionDirective],
    declarations: [HasPermissionDirective]
})
export class DirectivesModule { }
