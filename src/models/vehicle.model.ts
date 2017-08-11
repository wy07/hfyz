export interface Vehicle {
    id: number;
    vehicleNo: string;       // 车牌号
    frameNo: string;         // 车架号
    ratifiedPayload: number; // 核定载重质量,kg
    color: string;           // 车辆颜色
    type: string;            // 车辆类型
    size: string;            // 车辆尺寸
}
