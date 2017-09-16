import {Component} from '@angular/core';
import {IonicPage} from 'ionic-angular';
import {BaseComponent} from "../../../components/base/base";

@IonicPage()
@Component({
  selector: 'page-contact',
  templateUrl: 'personinfo.html'
})
export class PersonInfoPage extends BaseComponent {

  private mUserName: string = this.userData.getUserName();

  private mCompanyName: string = this.userData.getCompanyName();

  private mRole: string = this.userData.getRole();

  private mCompanyCode: string = this.userData.getCompanyCode();

  private mUserId: string = this.userData.getUserId();


}
