import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

declare var MEvent: any;
declare var MMap: any;
declare var MPoint: any;
declare var MMarker: any;
declare var MIcon: any;
declare var MInfoWindow: any;
declare var MImgIcon: any;
declare var MSize: any;
declare var MPixel: any;

@Injectable()
export class MapProvider {

  map: any;
  pointMap = new Map();

  constructor(public http: Http) {
    console.log('Hello MapProvider Provider');
  }

  initMap () {
    let that = this;
    MEvent.ready(function () {
      that.map = new MMap('map', {
           center: new MPoint(116.404, 39.915),
           standardControl: false,
           zoom: 10
      });

   });
  }

  play (data) {
    let that = this;
    let geoPointStr = data.geoPoint;
    let geoPoint = data.geoPoint.split(",");
    this.map.centerAndZoom(new MPoint(parseFloat(geoPoint[0]), parseFloat(geoPoint[1])), 12);
    // this.map.clearOverlay(true);//清除地图叠加物
    //打点
    var point = new MPoint(parseFloat(geoPoint[0]), parseFloat(geoPoint[1]));
    var marker = new MMarker(point, {
          icon: new MImgIcon('assets/img/car01.png', {
            size: new MSize(32, 45)
        })
      }
    );
    this.map.addOverlay(marker);
    MEvent.bind(marker, 'click', function () {
        this.openInfoWindow(new MInfoWindow(that.infoWindowHtml(data), {
            autoAdjustPosition: true
        }));
    }); //点击_mk对象（标注），弹出气泡
  }

  refresh (data) {
    let that = this;
    let params = {
        data: data
    };
    this.pointMap.set(data.plateNo, params);
    console.log(this.pointMap);
    this.map.clearOverlay(true);
    this.pointMap.forEach(function(value) {
        that.play(value.data);
    });
  }

  infoWindowHtml (realTimeData) {
    return `
      <div id="panel" style="font-size: 12px;color: black;">
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

}
