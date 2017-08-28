/**
 * Created by wy on 2017/8/25.
 * 从业人员-考核员
 */
export class WorkerCheckMember {
  idCardNo: string;  //身份证号
  companyCode: string;  //业户编码
  workLicenseType: string;   //从业资格类别
  workLicenseNo: string;   //从业资格证号
  workLicenseGetTime: string;   //从业资格证初领时间
  workLicenseGrantTime: string;   //从业资格证发放时间
  endTime: string;   //证件有效期至
  licenseGrantOrg: string;   //发证机关
  licenseSituation: string;   //证照状态
  licenseChangeTimes: number;   //补换证次数
  trainTimes: number;  //培训次数
  checkType: string;  //考核类别
}
