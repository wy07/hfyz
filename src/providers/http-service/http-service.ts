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
   * 获取待办任务列表
   * url: /upcoming-tasks
   */
  getUpcomingTasks() {
    return this.restangular.all('upcoming-tasks')
      .customGET("").toPromise();
  }

  /**
   * 待办事项
   * url: /hidden-rectification-orderss/list
   */
  getRectification1(max: number, offset: number, listStatus: any) {
    return this.restangular.all('hidden-rectification-orders').customGET('list', {
      max: max,
      offset: offset,
      listStatus: listStatus
    }).toPromise();
  }

  /**
   * 获取公司列表
   * url: /companys
   */
  searchCompanys() {
    return this.restangular.all('owner-identitys').customGET('list', {}).toPromise();
    // return this.restangular.all('platform-manages').customGET('list',{}).toPromise();
    // return this.restangular.all('companys')
    //   .customGET("").toPromise();
  }

  /**
   * 根据公司获取车辆列表
   * url: /companys/:id/vehicles
   */
  searchVehicles(companyCode: string) {
    return this.restangular.one('companys', companyCode).customGET('cars').toPromise();
    // return this.restangular.all('cars').customGET('search', {    });
    // return this.restangular.one('companys', {id: id})
    //   .customGET("vehicles").toPromise();
  }

  /**
   * 提交企业反馈
   * url: /rectification-orders/:id/feedback
   */
  rectificaionFeedback(id: number, feedback: string) {
    /*return this.restangular.one('rectification-orders', id)
     .customPOST({id: id, feedback: feedback}, 'feedback').toPromise();*/
  }

  /**
   * 确认企业反馈
   * url: /rectification-orders/:id/confirm
   */
  rectificaionConfirm(id: number) {
    /*return this.restangular.one('rectification-orders', id)
     .customPOST({id: id}, 'confirm').toPromise();*/
  }

  getWaybills(status: string, max: number, offset: number) {
    return this.restangular.all('freight-waybills')
      .customGET("search", {status: status, max: max, offset: offset}).toPromise();
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
  searchTrack(licenseNo, startDate, endDate) {
    return this.restangular.all('cars').customGET("history-info", {
        licenseNo: licenseNo,
        startDate: startDate,
        endDate: endDate
      }
    );
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
  getCarDetail(id: number) {
    return this.restangular.one('cars', id).customGET('detail').toPromise();
  }

  /**
   * 获取从业人员列表
   * url: /peoples/search
   */
  getPeoples() {
    return this.restangular.all('people-basic-infos').customGET('list').toPromise();
  }

  /**
   * 获取从业人员详情
   * url:/people/:idCardNo
   */
  getPeopleDetail(IDCardNo: string) {
    return this.restangular.one('people-basic-infos').customGET('more', {IDCardNo: IDCardNo}).toPromise();
  }

  /**
   * 修改密码
   * @param oldPwd
   * @param newPwd
   * @returns {any}
   */
  changePwd(oldPwd, newPwd) {
    return this.restangular.all('change-pwd').customPOST({originPwd: oldPwd, newPwd: newPwd});
  }

  /**
   * 登录
   * url: /login
   */
  login(username: string, password: string) {
    return this.restangular.all('login').post({username: username, password: password}).toPromise();
    /*return this.restangular.all('login').post({username: username, password: password});*/
  }

  commitRectificationFeedback(id, reply, replyDesc) {
    return this.restangular.one('hidden-rectification-orders', id).customPOST(
      {reply: reply , replyDesc: replyDesc}
      , 'enterprise-feedback');
  }

  getApprovalList(id) {
    return this.restangular.one('hidden-rectification-orders', id).customGET('review-approval-list');
  }

  /**
   * 企业整改查询
   * url: /hidden-rectification-orders/list
   */
  requestOrderList(max, offset, company, sd, ed, status, listStatus) {
    return this.restangular.all('hidden-rectification-orders').customGET('list',
      {max: max, offset: offset, company: company, startDate: sd, endDate: ed, status: status, listStatus: listStatus});
  }

  /**
   * 查询企业整改详情
   * url: /hidden-rectification-orders/edit
   */
  requestOrderDetail(id) {
    return this.restangular.one('hidden-rectification-orders', id).customGET('edit');
  }

  /**
   * 更新整改单数据
   * url: /hidden-rectification-orders/edit
   */
  updateRectification(id, newMessage) {
    return this.restangular.one('hidden-rectification-orders', id).customPOST(newMessage, 'update');
  }

  deleteRectification(id) {
    return this.restangular.one('hidden-rectification-orders', id).customDELETE('delete', {});
  }

  addRectification(hiddenRectificationOrder) {
    return this.restangular.all('hidden-rectification-orders').customPOST(hiddenRectificationOrder, 'save');
  }

  searchCompany(enterpirse) {
    return this.restangular.all('hidden-rectification-orders').customGET('company-list', {enterpirse: enterpirse});
  }

  commitRectification(id) {
    return this.restangular.one('hidden-rectification-orders', id).customGET('submit-order');
  }

  /**
   * 隐患整改单审核
   * @param billId 订单号
   * @param time 当前时间
   * @param approveDesc 审核意见
   * @param opinion 是否同意 'true'和'false'
   * @returns {any}
   */
  commitRectificationApproval(billId, curTime, approveDesc, opinion) {
    return this.restangular.all('review-and-approvals').customPOST(
      {billId: billId , time: curTime , approveDesc: approveDesc, tempStatus: opinion}, 'save');
  }

  confirmRectification(id, tempStatus) {
    return this.restangular.one('review-and-approvals', id).customPOST({tempStatus: tempStatus}
      , 'give-result');
  }

  /**
   * 获取电子行程单详情
   * url：/freight-waybills/id/show
   */
  show(id: number) {
    return this.restangular.one('freight-waybills', id).customGET('show', {});
  }

  /**
   * 获取法律法规
   * url:/infoaudits/select
   */
  getLaws(type, max, offset) {
    return this.restangular.one('infoaudits').customGET('select', {
      type: type,
      max: max,
      offset: offset
    }).toPromise();
  }

  /**
   * 获取法律法规详情
   * url:/infoaudits/:id/edit
   */
  getLawDetail(id) {
    return this.restangular.one('infoaudits', id).customGET('edit').toPromise();
  }

  /**
   * 获取消息列表（前三）
   */
  getMessage(max, offset) {
    return this.restangular.all('in-boxs').customGET('list', {max: max, offset: offset});
  }

  /**
   * 改变状态
   * @param id
   * @returns {any}
   */
  changeState(id) {
    return this.restangular.one('in-boxs', id).customGET('change-state');
  }

  /**
   * 获取报警信息列表（工单）
   * url：work-orders/list
   */
  getWorkOrders(max, offset) {
    return this.restangular.all('work-orders').customGET('list', {max: max, offset: offset}).toPromise();
  }

  /**
   * 获取报警信息详情（工单）
   * url：work-orders/list
   */
  getWorkOrderDetail(id) {
    return this.restangular.one('work-orders', id).customGET('show').toPromise();
  }

  /*
   * 获取业户列表
   * url:owner-identitys/list
   */
  getOwners(max, offset) {
    return this.restangular.all('owner-identitys').customGET('list', {max: max, offset: offset}).toPromise();
  }

  /*
   * 获取业户详情
   * url:owner-identitys/:id/view
   */
  getOwnerDetail(id) {
    return this.restangular.one('owner-identitys', id).customGET('view').toPromise();
  }
}
