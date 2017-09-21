/**
 * Created by wy on 2017/9/20.
 * yehu
 */
export interface OwnerIdentity {
  id: number;
  ownerName: string;                  //业户名称*
  companyCode: string;                //业户编码(组织机构代码）*
  parentCompanyName: string;          //上级企业名称
  ownerAddress: string;               //业户地址
  postCode: number;                   //邮政编码
  administrativeDivisionName: string; //行政区划名称
  administrativeDivisionCode: number; //行政区划代码
  economicType: string;               //经济类型
  legalRepresentative: string;        //法人代表
  idCardType: string;                 //法人代表身份证类型
  idCardNo: string;                   //法人代表身份证号
  picture: boolean;                   //法人代表照片
  operateManager: string;             //经营负责人 *
  phone: string;                      //电话  *
  fax: string;                        //传真号码
  telephone: string;                  //手机号码
  email: string;                      //电子邮箱
  website: string;                    //网址
  parentOwner: string;                //母公司
  shortName: string;                  //业户简称
  ownerCode: string;                  //企业单位代码
}
