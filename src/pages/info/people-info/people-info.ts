import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {PeopleBasicInfo} from "../../../models/people/peopleBasicInfo.model";
import {BaseComponent} from "../../../components/base/base";

@IonicPage()
@Component({
  selector: 'page-people-info',
  templateUrl: 'people-info.html',
})
export class PeopleInfoPage extends BaseComponent {
  input: string;
  searchPeoples: Array<PeopleBasicInfo>;
  peopleList: Array<PeopleBasicInfo>;
  detailList: Array<{ data: any, type: string }>;


  ionViewDidLoad() {
    console.log('ionViewDidLoad PeopleInfoPage');
    this.doRefresh();
  }

  doRefresh(refresher?) {
    console.log('------------PeopleInfoPage doRefresh--------------');
    this.peopleList = [];
    this.getPeoples().then((peopleList: Array<PeopleBasicInfo>) => {
      this.peopleList = peopleList;
      this.searchPeoples=this.peopleList;
      if (refresher) refresher.complete();
    }, err => {
      if (refresher) refresher.complete();
    });
  }

  async getPeoples() {
    try {
      let res = await this.httpService.getPeoples();
      console.log('------------PeopleInfoPage getPeoples--------------');
      return res.peopleList;
    } catch (error) {
      console.log("err--->" + JSON.stringify(error));
    }
  }

  onInput () {
    if (this.input === '') {
      this.searchPeoples = this.peopleList;
      return;
    }
    this.searchPeoples = this.peopleList.filter(
      (people: PeopleBasicInfo) => people.name.indexOf(this.input) > -1);
  }

  async getDetail(people: PeopleBasicInfo) {
    try {
      let res = await this.httpService.getPeopleDetail(people.idCardNo);
      this.detailList = [
        {data: res.checkMember, type: 'checkMember'},
        {data: res.coach, type: 'coach'},
        {data: res.driver, type: 'driver'},
        {data: res.manager, type: 'manager'},
        {data: res.tech, type: 'tech'},
        {data: res.waiter, type: 'waiter'},
      ];
      this.app.getRootNav().push('PeopleInfoDetailPage', {detailList: this.detailList});
    } catch (error) {
      console.log(JSON.stringify(error));
    }
  }
}
