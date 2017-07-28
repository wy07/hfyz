var maplet = null;//定义地图对象
var points = [];//用于存放点信息，然后画线

var mapObject = (function () {

    return {
        initMap: function (element) {
            maplet = new Maplet(element);//初始化地图对象
            maplet.showOverview(false, false);
            maplet.centerAndZoom(new MPoint(116.35566, 39.93218), 16);//设置地图中心点
            maplet.resize(document.getElementById(element).clientWidth, document.documentElement.clientHeight - 124);//初始化地图宽和高
            window.onresize = function () {//自适应地图宽和高
                maplet.resize(document.getElementById(element).clientWidth, document.documentElement.clientHeight - 124);
            };
        },

        //实时轨迹
        play: function (data) {
            var geoPointStr = data.geoPoint;
            var geoPoint = data.geoPoint.split(",");
            maplet.centerAndZoom(new MPoint(geoPoint[0], geoPoint[1]), 16);
            //控制，当经纬度点用光，报数组越界的情况
            maplet.clearOverlays(true);//清除地图叠加物
            //打点
            var point = new MPoint(geoPointStr);
            var marker = new MMarker(
                point,
                new MIcon("assets/img/car01.png", 32, 32),
                new MInfoWindow("test", "车辆信息")
            );
            maplet.addOverlay(marker);

            //画线
            marker.car = geoPointStr[0];
            points.push(point);
            if (points.length > 1) {
                var brush = new MBrush('#3287ff', 8);
                brush.transparency = 70;
                var polyline = new MPolyline(points, brush, null);
                maplet.addOverlay(polyline);
            }
        }
    }
}());