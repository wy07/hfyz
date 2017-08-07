import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the UserDataProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class UserDataProvider {

  TOKEN: string;
  PERMISSION: string;

  constructor(public http: Http) {
    console.log('Hello UserDataProvider Provider');
  }

  setToken(token: string): void {
    this.TOKEN = token;
  }

  getToken(): string {
    return this.TOKEN;
  }

  setPermission(permission: string): void {
    this.PERMISSION = permission;
  }

  getPermission(): Array<string> {
    return this.PERMISSION.split(';');
  }

}
