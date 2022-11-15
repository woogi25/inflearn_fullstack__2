// console.log(document.querySelector("div.welcome"));
// console.log(document.querySelectorAll("div"));
// console.log(document.getElementsByTagName("div"));
// console.log(document.getElementById("hi"));
// console.log(document.getElementsByClassName("welcome"));

// const divTag = document.querySelector("div");

// console.log(divTag);

// divTag.style.color = "red";

// const divTag = document.querySelector("div");

// divTag.innerText = "<h1>안녕하세요.</h1>";
// // divTag.innerHTML = "<h1>안녕하세요.</h1>";

// divTag.style.fontSize = "30px";

// const container = document.querySelector(".container");
// // console.log(container);
// // // 부모 태그
// // console.log(container.parentElement);
// // // 자식 태그
// // console.log(container.children);
// // // 형제 태그
// // console.log(container.nextElementSibling);

// console.log(container.children[1].children[1]);


// // div.inner를 선택
// let inner = document.querySelector(".inner");
// // <div>태그 생성
// let element = document.createElement("div");
// // text 노드 hello 생성
// let hello = document.createTextNode("hello");
// // <div>hello</div>로 만들기
// element.appendChild(hello);
// // div.inner에 element 추가
// inner.appendChild(element);



// const productsData = { title: "감자칩", weight: 300 };

// const app = document.querySelector("#app"); // div#app 태그 선택

// app.innerHTML = `<div class="item">상품명 : ${productsData.title}, 
//                 무게 ${productsData.weight}g</div>`; 
//                 // 템플릿 리터럴과 innerHTML 속성을 사용

const app = document.querySelector("#app"); // div#app 태그 선택

const productsData = [
    { title: "감자칩", weight: 300 },
    { title: "칙촉", weight: 100 },
    { title: "고구마칩", weight: 300 },
    { title: "오잉", weight: 50 },
  ];

let result = "";

for (let data of productsData) {
    result += `<div class="item">상품명 : ${data.title}, 무게 
    ${data.weight}g</div>`
}

app.innerHTML = result