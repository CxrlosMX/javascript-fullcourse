function squarePromise(value) {
    if (typeof value !== `number`) return Promise.reject(`Error this value is incorrect`);
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({
                value,
                result: value * value
            });
        }, 0 | Math.random() * 1000);
    });

}

// Asyc-function
//await: Await function is used to wait for the promise. It could be used within the async block only. It makes the code wait until the promise returns a result. It only makes the async block wait, await is only valid ins Async Functions
async function asycFunction() {
    try {
        console.log(`Start Async Function`);
        let obj = await squarePromise(0);
        console.log(`Asyn Function: ${obj.value}, ${obj.result}`);
        obj = await squarePromise(1);
        console.log(`Asyn Function: ${obj.value}, ${obj.result}`);
        obj = await squarePromise(2);
        console.log(`Asyn Function: ${obj.value}, ${obj.result}`);
        obj = await squarePromise(3);
        console.log(`Asyn Function: ${obj.value}, ${obj.result}`);
        obj = await squarePromise(4);
        console.log(`Asyn Function: ${obj.value}, ${obj.result}`);
        obj = await squarePromise(5);
        console.log(`Asyn Function: ${obj.value}, ${obj.result}`);
        console.log(`Finish`);
    } catch (error) {
        console.error(error);
    }
}
//asycFunction();

const asycFunctionExpress =async() => {
    try {
        let obj = await squarePromise(6);
        console.log(`Asyn Function: ${obj.value}, ${obj.result}`);
        obj = await squarePromise(7);
        console.log(`Asyn Function: ${obj.value}, ${obj.result}`);
        obj = await squarePromise(8);
        console.log(`Asyn Function: ${obj.value}, ${obj.result}`);
        obj = await squarePromise(9);
        console.log(`Asyn Function: ${obj.value}, ${obj.result}`);
        obj = await squarePromise(10);
    } catch (error) {
        console.error(error);
    }
}
asycFunctionExpress();