var container = document.getElementById('map'); //지도를 담을 영역의 DOM 레퍼런스
var options = { //지도를 생성할 때 필요한 기본 옵션
	center: new kakao.maps.LatLng(37.54, 126.96), //지도의 중심좌표.
	level: 8 //지도의 레벨(확대, 축소 정도)
};

var map = new kakao.maps.Map(container, options); //지도 생성 및 객체 리턴



// 지도 확대 축소를 제어할 수 있는  줌 컨트롤을 생성합니다
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


  //


//     // 주소-좌표 변환 객체를 생성합니다
//     var geocoder = new kakao.maps.services.Geocoder();

//     for (var i = 0; i < dataSet.length; i ++) {
//     // 주소로 좌표를 검색합니다
//     geocoder.addressSearch(dataSet[i].address, function(result, status) {

//     // 정상적으로 검색이 완료됐으면 
//      if (status === kakao.maps.services.Status.OK) {
//         var coords = new kakao.maps.LatLng(result[0].y, result[0].x);
//         // 마커를 생성합니다
//         var marker = new kakao.maps.Marker({
//         map: map, // 마커를 표시할 지도
//         position: coords // 마커를 표시할 위치
//     });
//     }
//     });
// }
  

//  주소-좌표 변환 객체를 생성합니다
var geocoder = new kakao.maps.services.Geocoder();


async function setMap() {
    
    for (var i = 0; i < dataSet.length; i ++) {
        // 마커를 생성합니다
        let coords = await getCoordsByAddress(dataSet[i].address);
        var marker = new kakao.maps.Marker({
        map: map, // 마커를 표시할 지도
        position: coords // 마커를 표시할 위치
        });

    }
}





// 좌표 변환 함수
function getCoordsByAddress(address) {

    return new Promise((resolve, reject) => {

    
            // 주소로 좌표를 검색합니다
        geocoder.addressSearch(address, function(result, status) {
            // 정상적으로 검색이 완료됐으면 
            if (status === kakao.maps.services.Status.OK) {
                var coords = new kakao.maps.LatLng(result[0].y, result[0].x);
                resolve(coords);
                return;
                } 
            
            reject(new Error("getCoordsByAddress Error: not Valid Address"));
            }
        );   
    });
}
 

setMap();