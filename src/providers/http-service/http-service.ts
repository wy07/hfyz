import { Company } from './../../models/company.model';
import { Restangular } from 'ngx-restangular';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the HttpServiceProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class HttpService {

  constructor(public restangular: Restangular) {
  }

  /**
   * 登录
   * url: /login
   */
  login(phone: string, password: string) {
    return this.restangular.all('login').post({phone: phone, password: password}).toPromise();
  }

  /**
   * 获取企业整改列表
   * url: /rectification-orders
   */
  getRectification(company: Company, status: string, max: number, offset: number) {
    if (company) {
      return this.restangular.all('rectification-orders')
        .customGET("", {companyId: company.id, status: status, max: max, offset: offset}).toPromise();
    } else {
      return this.restangular.all('rectification-orders')
        .customGET("", {status: status, max: max, offset: offset}).toPromise();
    }
  }

  /**
   * 获取企业整改详情
   * url: /rectification-orders/:id
   */
  getRectificationDetail(id: number) {
    return this.restangular.one('rectification-orders', id)
      .customGET("", {id: id}).toPromise();
  }

  /**
   * 搜索公司列表
   * url: /companys
   */
  searchCompanys(query: string) {
    return this.restangular.all('companys')
      .customGET("", {query: query}).toPromise();
  }

  /**
   * 提交企业反馈
   * url: /rectification-orders/:id/feedback
   */
  rectificaionFeedback(id: number, feedback: string) {
    return this.restangular.one('rectification-orders', id)
      .customPOST({id: id, feedback: feedback}, 'feedback').toPromise();
  }

  /**
   * 确认企业反馈
   * url: /rectification-orders/:id/confirm
   */
  rectificaionConfirm(id: number) {
    return this.restangular.one('rectification-orders', id)
      .customPOST({id: id}, 'confirm').toPromise();
  }
}
