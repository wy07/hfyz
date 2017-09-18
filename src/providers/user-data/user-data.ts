import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
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

  private mUserName: string;

  private mRole: string;

  private mUserId: string;

  private mCompanyCode: string;

  private mCompanyName: string;

  constructor(public http: Http) {
    /*console.log('Hello UserDataProvider Provider');*/
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

  getUserName(): string {
    return this.mUserName;
  }

  setUserName(username: string) {
    this.mUserName = username;
  }

  getRole(): string {
    return this.mRole;
  }

  setRole(role: string) {
    this.mRole = role;
  }

  getUserId(): string {
    return this.mUserId;
  }

  setUserId(userid: string) {
    this.mUserId = userid;
  }

  getCompanyCode() {
    return this.mCompanyCode;
  }

  setCompanyCode(code: string) {
    this.mCompanyCode = code;
  }

  getCompanyName(): string {
    return this.mCompanyName;
  }

  setCompanyName(name: string) {
    this.mCompanyName = name;
  }

  clearLoginData() {
    this.setToken('');
    this.setRole('');
    this.setUserId('');
    this.setUserName('');
    this.setPermission('');
    this.setCompanyCode('');
    this.setCompanyName('');
  }

  private showPermission(): string {
    let permission = this.getPermission();
    let returnStr = '';
    for (var i = 0; i < permission.length; i++) {
      returnStr += permission[i] + '\n';
    }
    return returnStr;
  }

  toString(): string {
    return 'User Name: ' + this.mUserName + '\nUser Role: ' + this.mRole +
      '\nUser Id: ' + this.mUserId + '\nUser CompanyCode: ' + this.mCompanyCode +
      '\nUser CompanyName: ' + this.mCompanyName + '\n' + '\n' + this.showPermission();
  }

}
