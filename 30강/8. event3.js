const showBtn = document.getElementById("btn");

    // showBtn.addEventListener("click", function () {
    //     // document.getElementById("text").innerHTML = "짜잔~!! 텍스트가 나타났어요!!";
    // });

showBtn.addEventListener("click", eventHandler);

function eventHandler() {
    document.getElementById("text").innerHTML = "짜잔~!! 텍스트가 나타났어요!!";
}