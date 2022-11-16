// const OnePromise = new Promise((resolve, reject) => {
//         // true -> resolve ->then
//         //false -> reject -> catch

//         //생성 자체는 pending
//         let isSuc = true;

//         if(!isSuc) {
//             reject(false);
//             return;
//         }


//         console.log("1등");
//         setTimeout(() => {
//             resolve();
//         }, 2000);

//     });

//     OnePromise
//     .then((res) => {
//         console.log("2등");
//         return new Promise ((resolve, reject) => {
//             setTimeout(() => {
//                 resolve();
//             }, 2000);
//         });
//     })
//     .then((res) => {
//         console.log("3등");
//     })
//     .catch((err) => {
//         console.log(err);
//     });

// async function asyuncFuntion() {
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

// asyuncFuntion()

// async function asyncfunction() {
//     console.log("1등");
//     await second();
//     await third();
// }

// function second() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("2등");
//             resolve();
//         }, 2000);
//     });
// }

// function third() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("3등");
//             resolve();
//         }, 2000);
//         ;})
//     }

// asyncfunction();


// try {
//     블라블라;
// }catch (err) {
//     console.log(err);
// }


async function asyncFunction() {
    try{
        console.log(1);
        const result = await getResult();
        console.log(result);
        console.log(3);
    } catch (err) {
        console.log(err);
    }
}

function getResult() {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
             resolve(2);
        }, 500);

    })
}

asyncFunction();