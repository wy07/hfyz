import {BaseComponent} from '../../components/base/base';
import {Component} from '@angular/core';
import {NavController, NavParams, IonicPage} from 'ionic-angular';

/**
 * Generated class for the FunctionListPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-function-list',
  templateUrl: 'function-list.html',
})
export class FunctionListPage extends BaseComponent {

  navigateToCarPage() {
    this.app.getRootNav().push('CarInfoPage');
  }

  navigateToPeoplePage() {
    this.app.getRootNav().push('PeopleInfoPage');
  }

  navigateToOwnerPage() {
    this.app.getRootNav().push('OwnerInfoPage');
  }

}
