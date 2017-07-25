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
   * url: login/
   */
  login(phone: string, password: string) {
    return this.restangular.all('login').post({phone: phone, password: password}).toPromise();
  }
}
