import {BaseComponent} from './../../components/base/base';
import {Component, ElementRef, ViewChild} from '@angular/core';
import {NavController, IonicPage} from 'ionic-angular';

declare var echarts;

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage extends BaseComponent {
  relationship: any;

  // 绑定数据速率图表
  @ViewChild('dataRateChart') dataRateChart: ElementRef;
  mRateChart: any;
  mRateChartTitle: string;
  mRateChartValue: number;

  // 绑定两客一危图表
  @ViewChild('dangerChart') dangerChart: ElementRef;
  mDangerChart: any;
  mDangerChartTitle: string;
  mDangerChartValue: any[];

  // 当前的数据比率集合
  mRateChartArrays: Array<{ name: string, value: number }> = [
    {name: '车辆入网率', value: 15},
    {name: '车辆上线率', value: 35},
    {name: '查岗相应率', value: 62},
    {name: '超速车辆率', value: 75},
    {name: '疲劳驾驶率', value: 46}
  ];

  // 当前的两客一危集合
  mDangerChartArrays: Array<{ name: string, data: any[] }> = [
    {name: '按车辆', data: [{name: '危货', value: 300}, {name: '班车', value: 250}, {name: '旅游包车', value: 320}]},
    {name: '按企业', data: [{name: '危货', value: 360}, {name: '班车', value: 280}, {name: '旅游包车', value: 400}]},
    {name: '按从业人员', data: [{name: '危货', value: 200}, {name: '班车', value: 150}, {name: '旅游包车', value: 360}]}
  ];

  mCurrentStatus: boolean;

  mTotal: number = 0;


  laws: any;
  type: string;
  message: any;

  max: number;
  offset: number;

  ionViewDidLoad() {
    this.type = "政策法律法规";
    this.laws = [];
    this.max = 3;
    this.offset = 0;
    this.getLaws();
  }

  ionViewWillEnter() {
    this.initChart();
    this.getMessage();
  }

  initChart() {
    this.showDataRate(this.mRateChartArrays[0]);
    this.showDanger(this.mDangerChartArrays[0]);
  }

  lawDetail(law: any) {
    this.app.getRootNav().push('LawDetailPage', {id: law.id});
  }

  lawList() {
    /*console.log('----' + JSON.stringify(laws));*/
    this.app.getRootNav().push('LawListPage');
  }

  async getLaws() {
    try {
      let res = await this.httpService.getLaws(this.type, this.max, this.offset);
      this.laws = res.publishList.publishList;
    } catch (error) {
      console.log(JSON.stringify(error));
    }
  }

  moreMessage() {
    this.app.getRootNav().push('MessageDetailPage');
  }

  messageDetail(mes) {
    switch (mes.sourceType) {
      case 'GD' :

        break;
      case 'YHZGD':
        this.httpService.changeState(mes.id).subscribe(
          res => {
            this.goRectification(mes.sourceId, mes.action);
          }
        );

        break;
      case 'DZLD':

        break;
      default:
        break;
    }
  }

  private goRectification(id: number, status: any) {
    this.httpService.requestOrderDetail(id).subscribe(
      res => {
        if (res.result === 'success') {
          this.navCtrl.push(this.judgmentRectification(status), {
            info: res.hiddenRectificationOrder,
          });
        } else {
          this.showToast('获取数据失败！', 1000, this.SHOW_BOTTOM);
        }
      }
    );
  }

  private judgmentRectification(status: any) {
    let result = '';
    switch (status) {
      case 'DSH' :
        result = 'RectificationAuditPage';
        break;
      case 'DYR':
        result = 'RectificationConfirmPage';
        break;
      case 'DFK':
        result = 'RectificationFeedbackPage';
        break;
    }
    return result;
  }

  async getMessage() {
    try {
      this.httpService.getMessage(this.max,this.offset).subscribe(
        res => {
          if (res.total !== 0) {
            this.mTotal = res.total;
            this.message = res.list;
          }
          console.log(JSON.stringify(res));
        }
      );
    } catch (error) {
      console.log(JSON.stringify(error));
    }
  }

  getDataRateChart() {
    return {
      backgroundColor: '#FFFFFF',
      title: {
        text: this.mRateChartTitle,
        color: '#000000',
        textStyle: {
          fontSize: 14,
          fontWeight: 'normal',

        },
        left: 'center',
        bottom: 5,
      },

      tooltip: {
        formatter: "{a} <br/>{b} : {c}%"
      },

      series: [
        {
          name: this.mRateChartTitle,
          type: 'gauge',
          parent: ['100%', '70%'],
          radius: '100%',
          /*          axisLabel: {
                      fontSize: 8
                    },*/
          detail: {
            formatter: '{value}%',
            fontSize: 10
          },
          data: [{value: this.mRateChartValue}]
        }
      ],

      pointer: {
        length: '45%',
      }
    };
  }

  showDataRate(data: any) {
    this.mRateChartTitle = data.name;
    this.mRateChartValue = data.value;
    let ctx = this.dataRateChart.nativeElement;
    this.mRateChart = echarts.init(ctx);
    this.mRateChart.setOption(this.getDataRateChart());
  }

  getDangerChart() {
    return {
      backgroundColor: '#FFFFFF',
      title: {
        text: this.mDangerChartTitle,
        color: '#000000',
        textStyle: {
          fontStyle: {
            fontSize: 14,
            fontWeight: 'normal',
          }
        },
        left: 'center',
        bottom: 0,
      },
      tooltip: {
        formatter: "{b} <br/> {c} ({d}%)"
      },
      series: [
        {
          name: this.mRateChartTitle,
          type: "pie",
          selectedMode: "single",
          parent: ['100%', '100%'],
          radius: '80%',
          label: {
            normal: {
              position: "inner"
            }
          },
          data: [
            {value: this.mDangerChartValue[0].value, name: this.mDangerChartValue[0].name},
            {value: this.mDangerChartValue[1].value, name: this.mDangerChartValue[1].name},
            {value: this.mDangerChartValue[2].value, name: this.mDangerChartValue[2].name}
          ]
        }
      ]
    };
  }

  showDanger(data: any) {
    this.mDangerChartTitle = data.name;
    this.mDangerChartValue = data.data;
    let ctx = this.dangerChart.nativeElement;
    this.mDangerChart = echarts.init(ctx);
    this.mDangerChart.setOption(this.getDangerChart());
  }

  showOthers() {
    this.app.getRootNav().push('OthersPage');
  }
}
