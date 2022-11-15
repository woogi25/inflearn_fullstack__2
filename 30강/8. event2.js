const showBtn = document.getElementById("btn");

    //   showBtn.addEventListener("click", function() {
	// 				document.getElementById("text").innerHTML =
    //       "짜잔~!! 텍스트가 나타났어요!!";
    //   }); // 선택한 요소에 click 이벤트 리스너를 등록함.

showBtn.addEventListener("click", eventHandler);

function eventHandler(event) {
    console.log(event)
    document.getElementById("text").innerHTML = "짜잔~!! 텍스트가 나타났어요!!";
}