// A callback is a function passed as an argument to another function
//This technique allows a function to call another function
//A callback function can run after another function has finished
function squareCallback(value, callback) {
    setTimeout(() => {
        callback(value, value * value);
    }, 0 | Math.random() * 1000);
}

squareCallback(0, (value, result) => {
    // callback hell
    console.log(`Start CallBack`);
    console.log(`Callback: ${value}, ${result}`);
    squareCallback(1, (value, result) => {
        console.log(`Callback: ${value}, ${result}`);
        squareCallback(2, (value, result) => {
            console.log(`Callback: ${value}, ${result}`);
            squareCallback(3, (value, result) => {
                console.log(`Callback: ${value}, ${result}`);
                squareCallback(4, (value, result) => {
                    console.log(`Callback: ${value}, ${result}`);
                    squareCallback(5, (value, result) => {
                        console.log(`Callback: ${value}, ${result}`);
                        console.log(`Callback Hell!!!!💣`);
                        console.log(`http://callbackhell.com/`);
                    });
                });
            });
        });
    });
});