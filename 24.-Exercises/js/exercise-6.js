
/* 9) Program a function that obtains a random number between 501 and 600.
*/
const randomNumber = (max = undefined, min = undefined) => (max === undefined) ? console.warn("Please introduce the first value") : (min === undefined) ? console.warn(`Please introduce the second value`) : ///console.log((Math.round(Math.random() *max-min) + min));

    randomNumber(5, 1);

function randomN(max, min) {
    return Math.floor(Math.random() * max - min) + min;
}
//console.log(randomN(15, 1));


/*10) Program a function that receives a number and evaluates whether it is capicúa or not (which reads the same in one sense as in another), eg. myFunction (2002) will return true.*/
const capicuaNumber = (number = undefined) => {
    if (number === undefined) return console.warn(`Please introduce a number`);
    if (typeof number !== `number`) return console.error("Please introduce a number");
    number = number.toString();
    if (number.split(``).reverse().join(``) === number) {
        return console.info(true);
    }
    return console.info(false);
}
//capicuaNumber(212.212);

/*11) Program a function that calculates the factorial of a number (The factorial of a positive integer n, is defined as the product of all positive integers from 1 to n), eg. myFunction (5) will return 120.*/
const factorial = (number = undefined) => {
    if (number === undefined || typeof number !== `number`) return console.warn(`Please introduce a number`);
    if (number <= 0) return console.warn(`Please introduce a positive number`);

    let result=1;
    for (let i = 1; i <=number; i++) {
    //result=result*i;
    //This is the same but is a simplification
    result*=i;        
    }
    return console.info(`The factorial of the number ${number} is: ${result}`);
}
factorial(5);


