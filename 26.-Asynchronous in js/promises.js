function squarePromise(value) {
    if(typeof value!==`number`)return Promise.reject(`Error this value is incorrect`);
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({
                value,
                result: value * value
            });
        }, 0 | Math.random() * 1000);
    });

}

squarePromise(0).then((obj) => {
    // console.log(obj);
    console.log(`Start Promise`);
    console.log(`Promise: ${obj.value}, ${obj.result}`);
    return squarePromise(1);
}).then(obj => {
    console.log(`Promise: ${obj.value}, ${obj.result}`);
    return squarePromise(2);
}).then(obj => {
    console.log(`Promise: ${obj.value}, ${obj.result}`);
    return squarePromise(3);
}).then(obj => {
    console.log(`Promise: ${obj.value}, ${obj.result}`);
    return squarePromise(4);
}).then(obj => {
    console.log(`Promise: ${obj.value}, ${obj.result}`);
    return squarePromise(5);
}).then(obj => {
    console.log(`Promise: ${obj.value}, ${obj.result}`);
    console.log(`Finish`);
}).catch(err=>console.error(err));