// // 1 ~ 10 더하기

// let sum = 0;

// for (let i = 1; i <= 10; i++) {
//     sum = sum + i;
// }

// console.log(sum);


// for(let i = 1 ; i <= 20;i++) {
//     sum = sum + i;
// }

// console.log(sum);

//기명 함수

// function sum(start,target) {
//     let result = 0;
//     for (let i = start; i <= target; i++) {
//         result= result + i;
//     }

//     return result;
// }


// console.log(sum(10, 30));

// 익명 함수

// const sum = function (start,target) {
//     let result = 0;
//     for (let i = start; i <= target; i++) {
//         result = result + i;
//     }
//     return result; 
// }

// console.log(sum(10, 30));

const sum = (start,target) => {
    let result = 0;
    for (let i= start; i <= target; i++) {
        result = result +i;
    }

    return result;
}

// console.log(sum(10, 30));
console.log(sum(1,50));

//호이스팅
//기명함수 = 호이스팅 지원
//익명 함수 = 호이스팅 미지원

//bmi 함수 만들기

function BMI(height, weight) {
    const meterHeight = height / 100;
    const result = weight / (meterHeight * meterHeight);

    return result;
}

console.log(BMI(170, 70));