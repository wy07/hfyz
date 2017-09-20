/**
 * 报警信息（工单）
 */
export interface WorkOrder {
  id: number;
  sn: string;         //工单编号
  alarmType: string;   //报警类型
  alarmLevel: string; //报警等级
  companyCode: string;    //业户编码
  ownerName: string;   //业户名称
  operateManager: string; //经营负责人
  phone: string;         //电话
  frameNo: string;        //车架号
  userID: string;        //从业人员身份证号

  // todoRole: string  ;       //需执行角色名称

  dateCreated: string;
  lastUpdated: string;
  checkTime: string;       //检查时间
  rectificationTime: string ;  //整改时间
  note: string ;       //备注
  status: string;  //工单状态
  // passed: Boolean;
}
