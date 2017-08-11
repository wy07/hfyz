import { Escort } from './escort.model';
import { Driver } from './driver.model';
import { Vehicle } from './vehicle.model';

export interface FreightWaybill {

    id: number;
    vehicle: Vehicle;           //车辆信息

    companyCode: string;        // 业户编码
    ownerName: string;          //业户名称

    dangerousName: string;      //危险品名称
    dangerousType: string;      //危险品分类
    emergencyPlan: string;      //应急预案

    price: string;              //运输价格 元/车
    operatedType: string;       //是否经营性运输
    loadedType: string;         // 装载or卸载
    fullLoaded: boolean;        //是否满载
    amount: number;             // 装载量
    mile: number;               //运输距离
    departTime: string;         //运输出场时间
    consignCompany: string;     //托运单位
    backTime: string;           //托运会回场时间
    departArea: string;         //出发地
    arriveArea: string;         //目的地

    driver: Driver;             //驾驶员信息
    escort: Escort;             //押运员信息

    status: string;             //状态

}
