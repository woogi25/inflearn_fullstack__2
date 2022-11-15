// let inner = document.querySelector(".inner");
// let element = document.createElement("div");
// let hello = document.createTextNode("hello");
// element.appendChild(hello);
// inner.appendChild(element);

// const products = {title:"감자칩", weight:300};

// const app = document.querySelector("#app");

// app.innerHTML = `<div class="item">상품명 : ${products.title},
//                 무게 : ${products.weight}g</div>`;
//                 //템플릿과 리터럴과 innerHTML 속성을 사용

const productsData = [
    { title: "감자칩", weight: 300 },
    { title: "칙촉", weight: 100 },
    { title: "고구마칩", weight: 300 },
    { title: "오잉", weight: 50 },
  ];

const app = document.querySelector("#app");

let result = "";

for (let data of productsData) {
    result += `<div class=item>상품명 : ${data.title},
                무게 : ${data.weight}g</div>`
}

app.innerHTML = result;