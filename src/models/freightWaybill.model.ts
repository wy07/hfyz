export interface FreightWaybill {

    id: number;
    vehicleNo: string;          // 车牌号
    frameNo: string;            // 车架号
    companyCode: string;        // 业户编码
    ownerName: string;          //业户名称
    dangerousName: string;      //危险品名称
    dangerousType: string;      //危险品分类
    ratifiedPayload: number;    //核定载重质量,kg
    emergencyPlan: string;      //应急预案
    price: string;              //运输价格 元/车
    operatedType: string;       //是否经营性运输
    loadedType: string;         // 装载or卸载
    fullLoaded: boolean;        //是否满载
    amount: number;             // 装载量
    mile: number;               //运输距离
    departTime: string;         //运输出场时间
    driverName: string;         //驾驶员姓名
    idCardNo: string;           //驾驶员身份证号
    consignCompany: string;     //托运单位
    backTime: string;           //托运会回场时间
    departArea: string;         //出发地
    arriveArea: string;         //目的地
    status: string;             //状态

}
