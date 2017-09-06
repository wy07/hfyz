export interface Vehicle {
    id: number;
    licenseNo: string;       // 车牌号
    frameNo: string;         // 车架号
    ratifiedPayload: number; // 核定载重质量,kg
    carPlateColor: string;   // 车辆颜色
    type: string;            // 车辆类型
    size: string;            // 车辆尺寸
}
