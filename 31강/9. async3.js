const OnePromise = new Promise((resolve, reject) => {
        // true -> resolve ->then
        //false -> reject -> catch

        //생성 자체는 pending
        let isSuc = true;

        if(!isSuc) {
            reject(false);
            return;
        }


        console.log("1등");
        setTimeout(() => {
            resolve();
        }, 2000);

    });

    OnePromise
    .then((res) => {
        console.log("2등");
        return new Promise ((resolve, reject) => {
            setTimeout(() => {
                resolve();
            }, 2000);
        });
    })
    .then((res) => {
        console.log("3등");
    })
    .catch((err) => {
        console.log(err);
    });

