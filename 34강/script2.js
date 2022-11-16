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

//   var geocoder = new kakao.maps.services.Geocoder();

//   for (var i = 0; i < dataSet.length; i++){
//     geocoder.addressSearch(dataSet[i].address, function(result, status) {

//         if (status === kakao.maps.services.Status.OK) {
//             var coords = new kakao.maps.LatLng(result[0].y,result[0].x);
            
//             var marker = new kakao.maps.Marker({
//                 map: map, position: coords
//             });
//         }
//     });
//   }

var geocoder = new kakao.maps.services.Geocoder();


// 좌표 변환 함수
function getCoordsByAddress(address) {
    return new Promise((resolve, reject) => {

        geocoder.addressSearch(address, function(result, status) {
            if (status === kakao.maps.services.Status.OK) {
                var coords = new kakao.maps.LatLng(result[0].y, result[0].x);
                resolve(coords);
                return;
            }

            reject(new Error("getCoordsByaddress Error:not Valid Address"));
        });
    });
}


function getContent(data) {
    //인포윈도우 가공하기
    let finUrl ="";
    let replaceUrl = data.url;
    replaceUrl = replaceUrl.replace("https://youtu.be/", "");
  replaceUrl = replaceUrl.replace("https://www.youtube.com/embed/", "");
  replaceUrl = replaceUrl.replace("https://www.youtube.com/watch?v=", "");
  finUrl = replaceUrl.split("&")[0];

  return `<div class="infowindow">
  <div class="infowindow-img-container">
    <img src="https://img.youtube.com/vi/${finUrl}/mqdefault.jpg" class="infowindow-img"/>
  </div>
  <div class="infowindow-body">
    <h5 class="infowindow-title">${data.title}</h5>
    <p class="infowindow-address">${data.address}</p>
    <a href="${data.url}" class="infowindow-btn" target="_blank">영상이동</a>
  </div>
</div>`;
}


async function setMap() {

    for (var i = 0; i < dataSet.length; i ++){
        let coords = await getCoordsByAddress(dataSet[i].address);
        var marker = new kakao.maps.Marker({
            map:map, position: coords
        });

        //마커에 표시할 인포윈도우를 생성합니다.
        var infowindow = new kakao.maps.InfoWindow({
            content:getContent(dataSet[i]) //인포윈도우 표시할 내용
        });

        infowindowArray.push(infowindow);

        kakao.maps.event.addListener(marker, 'click', makeOverListener(map, marker, infowindow, coords));
     kakao.maps.event.addListener(map, 'click', makeOutListener(infowindow));

  }
}


function makeOverListener(map, marker, infowindow, coords) {
    return function() {
        closeInfowindow();
        infowindow.open(map, marker);

        map.panTo(coords);
    };
}

let infowindowArray = [];
function closeInfowindow() {
    for (let infowindow of infowindowArray) {
        infowindow.close();
    }
}

function makeOutListener(infowindow) {
    return function() {
        infowindow.close();
    }
}

setMap();