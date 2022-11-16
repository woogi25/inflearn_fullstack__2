var container = document.getElementById('map');
var options = {center: new kakao.maps.LatLng(37.54, 126.96), level: 8};

var map = new kakao.maps.Map(container, options);

var zoomControl = new kakao.maps.ZoomControl();
map.addControl(zoomControl, kakao.maps.ControlPosition.RIGHT);

/*
**********************************************************
2. 더미데이터 준비하기 (제목, 주소, url, 카테고리)
*/
const dataSet = [
	{
	  title: "희락돈까스",
	  address: "서울 영등포구 양산로 210",
	  url: "https://www.youtube.com/watch?v=1YOJbOUR4vw&t=88s",
	  category: "양식",
	},
	{
	  title: "즉석우동짜장",
	  address: "서울 영등포구 대방천로 260",
	  url: "https://www.youtube.com/watch?v=1YOJbOUR4vw&t=88s",
	  category: "한식",
	},
	{
	  title: "아카사카",
	  address: "서울 서초구 서초대로74길 23",
	  url: "https://www.youtube.com/watch?v=1YOJbOUR4vw&t=88s",
	  category: "일식",
	},
  ];