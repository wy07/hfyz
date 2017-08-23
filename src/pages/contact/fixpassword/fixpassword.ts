import {Component} from '@angular/core';
import {IonicPage} from 'ionic-angular';
import {BaseComponent} from "../../components/base/base";

@IonicPage()
@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage extends BaseComponent {
  goToFixPage() {
    this.app.getRootNav().push('RectificationDetailPage');
  }
}
