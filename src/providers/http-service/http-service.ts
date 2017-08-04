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
  getRectification(companyId: number, status: string, max: number, offset: number) {
    return this.restangular.all('rectification-orders')
      .customGET("", {companyId: companyId, status: status, max: max, offset: offset}).toPromise();
  }

  /**
   * 获取企业整改详情
   * url: /rectification-orders/:id
   */
  getRectificationDetail(id: number) {
    return this.restangular.one('rectification-orders', id)
      .customGET("", {id: id}).toPromise();
  }
}
