// console.log(document.querySelector("div.welcome"))
// console.log(document.querySelectorAll("div"))
// console.log(document.getElementsByTagName("div"));
// console.log(document.getElementById("hi"));
// console.log(document.getElementsByClassName("welcome"));

// const divTag = document.querySelector("div");
// console.log(divTag);
// divTag.style.color = "red";

// const divTag = document.querySelector("div");
// divTag.innerText = "<h1>안녕하세요.</h1>";
// // divTag.innerHTML = "<h1>안녕하세요</h1>";

// divTag.style.fontSize = "30px";

// const container = document.querySelector(".container");
// console.log(container);
// console.log(container.parentElement);
// console.log(container.children);
// console.log(container.nextElementSibling);

// console.log(container.children[1].children[1])

// let inner = document.querySelector(".inner");
// let element = document.createElement("div");
// let hello = document.createTextNode("hello");
// element.appendChild(hello);
// inner.appendChild(element);

// const productsData = {title:"감자칩", weight:300};

// const app = document.querySelector("#app");

// app.innerHTML = `<div class="item">상품명 : ${productsData.title},
//                 무게 : ${productsData.weight}g</div>`;

const app = document.querySelector("#app");

const productsData = [
    { title: "감자칩", weight: 300 },
    { title: "칙촉", weight: 100 },
    { title: "고구마칩", weight: 300 },
    { title: "오잉", weight: 50 },
  ];

let result = "";

for (let data of productsData) {
    result += `<div class="item">상품명 : ${data.title}, 무게 :
     ${data.weight}g</div>`
}

app.innerHTML = result;