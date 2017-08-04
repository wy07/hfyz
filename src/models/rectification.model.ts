export interface Rectification {

    id: number;
    billNo: string;             //但据编号
    area: string;               //区域
    enterpirse: string;         //业户名称
    examiner: string;           //检查人
    inspectionDate: string;     //检查日期
    dealineDate: string;        //整改期限
    nsPosition: string;         //检查地点
    insDesc: string;            //检查内容
    insQuestion: string;        //存在问题
    proPosal: string;           //整改意见
    replyDate: string;          //反馈日期
    replyDesc: string;          //企业反馈
    status: string;             //状态
}
