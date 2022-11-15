// const hi = new Promise((resolve, reject) => {
//     // resolve("good");
//     reject("fail");
// });

// hi
// .then((res) => console.log(res))
// .catch((err) => console.log(err));

// const helloPromise = new Promise((reslove, reject) => {
//     // 생성 자체는 pending
//     let isSuccess = true;
    
//     if (!isSuccess) {
//         reject(false); //catch 호출
//         return;
//     }

//     console.log("1등");
//     setTimeout(() => {
//         reslove(); //tehn 호출
//     }, 2000);
//    });
    

// helloPromise
//    .then((res) => {
//     console.log("2등");
//     return new Promise((reslove, reject) => {
//         setTimeout(() => reslove(), 2000);
//     });
//    }) 
//    .then((res) => {
//     console.log("3등");
//    })
//    .catch((err) => {
//     console.log(err);
//    });



// async function asyncFunction() {
//     console.log(1);
//     const result = await getResult();
//     console.log(result);
// }

// function getResult() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(2);
//         }, 2000);
//     });
// }

// asyncFunction();

// async function asyncFunction() {
//     console.log("1등");
//     await second();
//     await thrid();
// }

// function second() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//                 console.log("2등");
//                 resolve();
//         }, 2000);
//     });
// }

// function thrid() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("3등");
//             resolve();
//         }, 2000);
//     });
// }

// asyncFunction();

async function asyncFunction() {
    try {
        console.log(1);
        const result = await getResult();
        console.log(result);
        console.log(3);
    } catch (err) {
        console.log(err)
    }
}

function getResult() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject(new Error("에러발생 예시"));
        }, 2000);
    });
}

asyncFunction();