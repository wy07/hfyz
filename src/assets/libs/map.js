var maplet = null;//定义地图对象
//车辆轨迹信息
var datas = "116.35566,39.93218;116.35566,39.93213;116.35566,39.93206;116.35566,39.93202;116.35566,39.93198;116.35566,39.93193;116.35567,39.93189;116.35567,39.93183;116.35568,39.93178;116.35567,39.93176;116.35568,39.93168;116.35568,39.93162;116.35569,39.93157;116.35569,39.93152;116.35569,39.9315;116.3557,39.93148;116.3557,39.93144;116.3557,39.93139;116.3557,39.93135;116.35571,39.93131;116.35571,39.93123;116.35571,39.9312;116.35571,39.93116;116.35571,39.93114;116.35571,39.93109;116.35571,39.93104;116.35572,39.93101;116.35572,39.93096;116.35572,39.93092;116.35572,39.93089;116.35573,39.93086;116.35573,39.93082;116.35573,39.93078;116.35573,39.93074;116.35574,39.93071;116.35573,39.93066;116.35573,39.9306;116.35573,39.93054;116.35574,39.9305;116.35574,39.93044;116.35574,39.93038;116.35574,39.93031;116.35573,39.93027;116.35575,39.9302".split(";");
var n = 0;//数组下标
var points = [];//用于存放点信息，然后画线

var mapObject = (function () {

    //实时轨迹
    function play(n) {
        if(n<datas.length){//控制，当经纬度点用光，报数组越界的情况
            var data = datas[n];
            maplet.clearOverlays(true);//清除地图叠加物
            //打点
            var point = new MPoint(data);
            var marker = new MMarker(
                point,
                new MIcon("assets/img/car01.png", 32, 32),
                new MInfoWindow("test", "车辆信息")
            );  
            maplet.addOverlay(marker);
            
            //画线
            marker.car =  data[0];
            points.push(point);			
            if(points.length>1) {
                var brush = new MBrush('#3287ff',8);
                brush.transparency=70;
                var polyline = new MPolyline(points,brush,null);
                maplet.addOverlay(polyline);
            }
            
        }
    }

    //定时刷新车辆位置信息,每4秒刷新一次
    function timedCount()  {
        var interval = setInterval(function(){
            n++;
            play(n);
            console.log("=======interval=======");
            if (n === 40) clearInterval(interval); 
        }, 1000);
}

    return {
        initMap: function (element) {
            maplet = new Maplet(element);//初始化地图对象
            maplet.centerAndZoom(new MPoint(116.35566,39.93218), 16);//设置地图中心点
            maplet.resize(document.getElementById(element).clientWidth, document.documentElement.clientHeight - 124);//初始化地图宽和高
            window.onresize = function () {//自适应地图宽和高
                maplet.resize(document.getElementById(element).clientWidth, document.documentElement.clientHeight - 124);
            };

            timedCount();
        }
    }
}());