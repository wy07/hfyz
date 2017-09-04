export interface FreightWaybill {

  vehicleNo: string;// 车牌号
  frameNo: string;  // 车架号
  carPlateColor: string;  // 车辆颜色
  carType: string;  // 车辆类型
  carSize: string;  // 车辆尺寸
  licenseNo: string;  // 挂车车牌号
  companyCode: string;  // 业户编码
  ownerName: string;  //业户名称
  dangerousName: string;  //危险品名称
  // DangerousType dangerousType //危险品分类
  ratifiedPayload: number;  //核定载重质量,kg
  emergencyPlan: string;  //应急预案
  price: number;  //运输价格 元/车
  operatedType: string;  //是否经营性运输
  loadedType: string;  // 装载or卸载
  fullLoaded: string;  //是否满载
  amount: number;  // 装载量
  mile: number;  //运输距离
  departTime: string;  //运输出场时间
  driverName: string;  //驾驶员姓名
  driverWokeLicenseNo: string;  //驾驶员从业资格证号
  driverPhone: string;  //驾驶员联系电话
  supercargoName: string;  //押运员姓名
  supercargoWokeLicenseNo: string;  // 押运员从业资格证号
  supercargoPhone: string;  //押运员联系电话
  consignCompany: string;  //托运单位
  backTime: string;  //托运会回场时间
  departArea: string;  //出发地
  arriveArea: string;  //目的地
  status: string;  //状态
  routerName: string;
  startProvince: string;
  startProvinceCode: string;
  startCity: string;
  startCityCode: string;
  startDistrict: string;
  startDistrictCode: string;
  endProvince: string;
  endProvinceCode: string;
  endCity: string;
  endCityCode: string;
  endDistrict: string;
  endDistrictCode: string;
  viaLand: string;
}
