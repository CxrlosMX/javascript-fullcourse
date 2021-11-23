//The setTimeout() method calls a function or evaluates an expression after a specified number of milliseconds, The function is only executed once. If you need to repeat execution, use the setInterval() method.
console.log("Start:" + new Date());
setTimeout(() => {
    console.log(`running setTimeout(), this runs only once`);
}, 1000);
//1000==1 second

//The clearTimeout() method clears a timer set with the setTimeout() method.
let time = setTimeout(() => {
    console.log(`running setTimeout(), this runs only once`);
}, 1000);
clearTimeout(time);
// -------------------------------------------

//The setInterval() method calls a function or evaluates an expression at specified intervals (in milliseconds).The setInterval() method will continue calling the function until clearInterval() is called, or the window is closed.
// setInterval(()=>{
//     console.log(`The setInterval() method will continue calling the function`);
// },1000);

//Example:Showing the hour
setInterval(() => {
    // console.log(new Date().toLocaleTimeString());
}, 1000);

//The clearInterval() method clears a timer set with the setInterval() method.
let date = setInterval(() => {
    console.log(new Date().toLocaleTimeString());
}, 1000);
clearInterval(date);