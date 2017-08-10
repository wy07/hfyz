import { BaseComponent } from './../../components/base/base';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { NavController, IonicPage } from 'ionic-angular';

declare var mapObject;
declare var BMap;
declare var Mapbar: any;

@IonicPage()
@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage extends BaseComponent {

  @ViewChild('map') mapElement: ElementRef;

  result = [
    {
      "dateStr":"2017-07-17 19:09:17",
      "plateColor":2,
      "plateNo":"京G79489",
      "posEncrypt":0,
      "geoPoint":"117.126825,31.852466",
      "gpsSpeed":0,
      "totalMileage":129806,
      "recSpeed":0,
      "direction":77,
      "altitude":0,
      "vehicleState":786451,
      "alarmState":1
    },
    {
      "dateStr":"2017-07-17 19:10:59",
      "plateColor":3,
      "plateNo":"京G00000",
      "posEncrypt":0,
      "geoPoint":"117.128825,31.854466",
      "gpsSpeed":88,
      "totalMileage":129806,
      "recSpeed":0,
      "direction":77,
      "altitude":0,
      "vehicleState":786451,
      "alarmState":0
    }
  ];

  ionViewDidLoad () {
    mapObject.initMap('map');
    mapObject.reload();
    setTimeout(() => {
      for(let v of this.result) {
        mapObject.refresh(v, this.infoWindowHtml(v));
      }
      // mapObject.play(this.result[0], this.infoWindowHtml(this.result[0]));
    }, 2000);
    this.eventbusProvider.register('皖N32076', res => {
      console.log("eventbus ---> " + JSON.stringify(res));
      mapObject.play(res.msg);
    });
    // this.loadMap();
  }

  loadMap() {
    var map = new BMap.Map(this.mapElement.nativeElement);          // 创建地图实例
    map.enableScrollWheelZoom();//启动滚轮放大缩小，默认禁用
    map.enableContinuousZoom();//连续缩放效果，默认禁用
    var point = new BMap.Point(116.404, 39.915);  // 创建点坐标
    map.centerAndZoom(point, 15);                 // 初始化地图，设置中心点坐标和地图级别
    //创建小狐狸
    var pt = new BMap.Point(116.404, 39.915);
    var myIcon = new BMap.Icon("http://developer.baidu.com/map/jsdemo/img/fox.gif", new BMap.Size(300, 157));
    var marker2 = new BMap.Marker(pt, { icon: myIcon });  // 创建标注
    map.addOverlay(marker2);              // 将标注添加到地图中
  }

  infoWindowHtml (realTimeData) {
    return `
      <div id="panel" style="background-color: rgba(38, 66, 90, 0.77);padding: 8px;border-radius: 8px;font-size: 12px;color: white;">
        <div>
          <div style="display: inline-block;width: 45px;">车牌号: </div>
          <div style="display: inline-block;">${realTimeData.plateNo}</div>
        </div>
        <div>
          <div style="display: inline-block;width: 45px;">时间: </div>
          <div style="display: inline-block;">${realTimeData.dateStr}</div>
        </div>
        <div>
          <div style="display: inline-block;width: 45px;">经纬度: </div>
          <div style="display: inline-block;">${realTimeData.geoPoint}</div>
        </div>
        <div>
          <div style="display: inline-block;width: 45px;">速度: </div>
          <div style="display: inline-block;">${realTimeData.gpsSpeed}</div>
        </div>
        <div>
          <div style="display: inline-block;width: 45px;">状态: </div>
          <div style="display: inline-block;">${realTimeData.alarmState}</div>
        </div>
      </div>
    `;
  }

  openNativeMap () {
    Mapbar.initMap();
  }

}
