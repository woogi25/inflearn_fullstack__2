const showBtn = document.getElementById("btn"); // 아이디가 "btn"인 요소를 선택함.

    //   showBtn.addEventListener("click", function () {
	// 				document.getElementById("text").innerHTML =
    //       "짜잔~!! 텍스트가 나타났어요!!";
    //   }); // 선택한 요소에 click 이벤트 리스너를 등록함.

    showBtn.addEventListener("click", eventHandler);

    function eventHandler() {
        // event 객체가 넘어감
        console.log(event);
        document.getElementById("text").innerHTML = "짜잔~!! 텍스트가 나타났어요!!";
    }