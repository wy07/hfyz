var maplet = null;//定义地图对象
var points = [];//用于存放点信息，然后画线
var pointMap = new Map();

var mapObject = (function () {

    function showCustomIw(overlay,x,y) {
        var options = {
            // Boolean类型，是否随地图移动
            pin: true,
            // Int类型，设置MPanel对象所指向的DOM元素的z-index值。需要注意以下情况：   
            //1.当pin启用时，此值必须大于1才可见，大于4将遮盖叠加物。   
            //2.当pin未启用时，此值必须大于1才可见，大于2时将遮盖鱼骨、比例尺、Logo，大于1000时将遮盖鹰眼
            zindex: 5,
            // String类型或者Dom对象,显示内容，支持HTML字符串和Dom对象。 
            content: overlay.info.content,
            // Object类型,显示位置。
            location: {type:"xy",x:x,y:y},
            // Boolean类型,是否允许滚轮缩放地图,当pin为true && zindex >=5的时候，才会生效
            mousewheel: false
        };
        var p = new MPanel(options);
        MPanel.enableDragMap(p.dom,true);
        maplet.addPanel(p);
        document.getElementById("panel").addEventListener("click", function(e) {
            // e.target is the clicked element!
            // If it was an item with class 'foo'
            console.log("======panel click========");
            maplet.removePanel(p);
        });
    }

    //实时轨迹
    function play(data, infoWindowHtml) {
        var geoPointStr = data.geoPoint;
        var geoPoint = data.geoPoint.split(",");
        maplet.centerAndZoom(new MPoint(geoPoint[0], geoPoint[1]), 16);
        // maplet.clearOverlays(true);//清除地图叠加物
        //打点
        var point = new MPoint(geoPointStr);
        var marker = new MMarker(
            point,
            new MIcon("assets/img/car01.png", 32, 32),
            new MInfoWindow("test", infoWindowHtml)
        );
        maplet.addOverlay(marker);
        MEvent.addListener(marker, "iw_beforeopen", showCustomIw);

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

    return {
        initMap: function (element) {
            maplet = new Maplet(element);//初始化地图对象
            maplet.showOverview(false, false);
            maplet.centerAndZoom(new MPoint(116.35566, 39.93218), 16);//设置地图中心点
            // maplet.addControl(new MStandardControl());
            maplet.resize(document.getElementById(element).clientWidth, document.documentElement.clientHeight - 124);//初始化地图宽和高
            maplet.customInfoWindow = true;
            maplet.enableDrag();
            window.onresize = function () {//自适应地图宽和高
                maplet.resize(document.getElementById(element).clientWidth, document.documentElement.clientHeight - 124);
            };
        },

        refresh: function (data, infoWindowHtml) {
            var params = {
                data: data,
                infoWindowHtml: infoWindowHtml
            };
            pointMap.set(data.plateNo, params);
            console.log(pointMap);
            maplet.clearOverlays(true);
            pointMap.forEach(function(value) {
                play(value.data, value.infoWindowHtml);
            });
        },

        reload: function () {
            maplet.clearOverlays(true);
            pointMap.clear();
        }
    }
}());
