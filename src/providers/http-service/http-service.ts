import {Company} from './../../models/company.model';
import {Restangular} from 'ngx-restangular';
import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';

/*
 Generated class for the HttpServiceProvider provider.

 See https://angular.io/docs/ts/latest/guide/dependency-injection.html
 for more info on providers and Angular DI.
 */
@Injectable()
export class HttpService {

  constructor(public restangular: Restangular, public http: Http) {
  }

  /**
   * 登录
   * url: /login
   */
  login(username: string, password: string) {
    return this.restangular.all('login').post({username: username, password: password}).toPromise();
    /*return this.restangular.all('login').post({username: username, password: password});*/
  }

  /**
   * 获取待办任务列表
   * url: /upcoming-tasks
   */
  getUpcomingTasks() {
    return this.restangular.all('upcoming-tasks')
      .customGET("").toPromise();
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
   * 获取公司列表
   * url: /companys
   */
  searchCompanys() {
    return this.restangular.all('companys')
      .customGET("").toPromise();
  }

  /**
   * 根据公司获取车辆列表
   * url: /companys/:id/vehicles
   */
  searchVehicles(id: number) {
    return this.restangular.one('companys', {id: id})
      .customGET("vehicles").toPromise();
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

  /**
   * 获取运单列表
   * url: /waybills
   */
  getWaybills(status: string, max: number, offset: number) {
    return this.restangular.all('waybills')
      .customGET("", {status: status, max: max, offset: offset}).toPromise();
  }

  /**
   * 获取车辆列表
   * url: /vehicles
   */
  getVehicles() {
    return this.restangular.all('vehicles').customGET("").toPromise();
  }

  /**
   * 获取司机列表
   * url: /drivers
   */
  getDrivers() {
    return this.restangular.all('drivers').customGET("").toPromise();
  }

  /**
   * 获取押运员列表
   * url: /escorts
   */
  getEscorts() {
    return this.restangular.all('escorts').customGET("").toPromise();
  }

  /**
   * 获取托运单位列表
   * url: /consignCompanys
   */
  getConsignCompanys() {
    return this.restangular.all('consignCompanys').customGET("").toPromise();
  }

  /**
   * 获取途径列表
   * url: /ways
   */
  getWays(departArea: string, arriveArea: string) {
    return this.restangular.all('ways').customGET("", {departArea: departArea, arriveArea: arriveArea})
      .toPromise();
  }

  /**
   * 获取省市区信息
   */
  getCityPickerData() {
    return this.http.get('./assets/city-data.json')
      .map(res => res.json()).toPromise();
  }

  /**
   * 创建货运单
   * url: /create-freight-waybill
   */
  createFreightWaybill(params: any) {
    return this.restangular.all('create-freight-waybill').post(params).toPromise();
  }

  /**
   * 获取历史轨迹数据
   * url: /search-track
   * params: query, startDate, endDate
   */
  searchTrack(params: any) {
    return this.restangular.all('search-track').customGET("", params)
      .toPromise();
  }

  /**
   * 获取车辆列表
   * url: /cars/search
   */
  getCars(carType: string) {
    return this.restangular.all('cars').customGET("search", {carType: carType}).toPromise();
  }

  /**
   * 获取车辆详情
   * url: /car/:frameNo
   */
  getCarDetail(frameNo: string) {
    return this.restangular.one('car', frameNo)
      .customGET("", {frameNo: frameNo}).toPromise();
  }

  /**
   * 获取从业人员列表
   * url: /peoples/search
   */
  getPeoples() {
    return this.restangular.all('peoples').customGET('search').toPromise();
  }

  /**
   * 获取从业人员详情
   * url:/people/:idCardNo
   */
  getPeopleDetail(idCardNo: string) {
    return this.restangular.one('people', idCardNo).customGET('', {idCardNo: idCardNo}).toPromise();
  }

  /** 确认旧密码是否正确
   * url: /confirm-old-pwd
   * @param {string} old_pwd
   */
  confirmOldPwd(old_pwd: string) {
    return this.restangular.all('confirm-old-pwd').post({old_pwd: old_pwd}).toPromise();
  }

  /**
   * 修改新密码
   * url: /fix-new-pwd
   * @param {string} new_pwd
   */
  fixNewPwd(new_pwd: string) {
    return this.restangular.all('fix-new-pwd').post({new_pwd: new_pwd}).toPromise();
  }
}
