import { UserDataProvider } from './../../providers/user-data/user-data';
import { Directive, Input, ElementRef, Renderer, OnInit } from '@angular/core';

/**
 * Generated class for the HasPermissionDirective directive.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/DirectiveMetadata-class.html
 * for more info on Angular Directives.
 */
@Directive({
  selector: '[hasPermission]' // Attribute selector
})
export class HasPermissionDirective implements OnInit {

  @Input() hasPermission: string;

  constructor(public el: ElementRef, public renderer: Renderer, public userData: UserDataProvider) {
    console.log('Hello HasPermissionDirective Directive');
  }

  ngOnInit () {
    if (!this.hasPermission) {
      return;
    }
    let target: Array<string> = this.hasPermission.split(';');
    let intersection: Array<string> = this.userData.getPermission().filter(v => target.indexOf(v) > -1);
    if (intersection.length > 0) {
      return;
    }
    this.el.nativeElement.style.display = "none";
    // this.renderer.setElementStyle(this.el.nativeElement, 'display', 'none');
  }

}
