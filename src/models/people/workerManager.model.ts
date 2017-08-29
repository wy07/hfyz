/**
 * Created by wy on 2017/8/25.
 * 从业人员-危货押运、装卸管理员
 */
export class WorkerManager {
  idCardNo: string;  //身份证号
  companyCode: string;  //业户编码
  workLicenseType: string;  //从业资格类别
  workLicenseNo: string;  //从业资格证号
  workLicenseGetTime: string;  //从业资格初领时间
  workLicenseGrantTime: string;  //从业资格发放时间
  endTime: string;  //证件有效期至
  licenseGrantOrg: string;  //发证机关
  licenseSituation: string;  //证照状态
  workSituation: string;  //从业状态
  ownerName: string;  //业户名称
  businessPermitCharacter: string;  //经营许可证字
  businessPermitNo: string;  //经营许可证号
  changeTimes: string;  //补换证次数
  trainTimes: string;  //培训次数
  inspectDealSituation: string;  //稽查处理状态
  trafficAccidentRecordNo: string;  //交通事故次数
}
