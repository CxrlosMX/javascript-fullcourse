/* 12) Program a function that determines if a number is prime (the one that is only divisible by itself and 1) or not, eg. myFunction (7) will return true.
*/
const primeNumber = (number = undefined) => {
    if (number == undefined || typeof number !== `number`) return console.warn(`Please introduce a number`);
    if (number === 0) return console.warn(`Zero not is a correct value`);
    if (Math.sign(number) === -1) return console.warn(`Please introduce a positive number`);

    let d = false;
    for (let i = 2; i < number; i++) {
        if (number % i === 0) {
            d = true;
            break;
        }

    }
    return console.info(d);
}
//primeNumber(163);



/*
13) Program a function that determines if a number is odd or even, eg. myFunction (29) will return Odd.
*/
const numEvenOdd = (number = undefined) => {
    if (!number) return console.warn(`Please introduce a number`);
    if (typeof number !== `number`) return console.error(`Plase introduce a value type number`);
    if (Math.sign(number) === -1) return console.error(`Please introduce a positive number`);

    return (number % 2 == 0) ? console.info(`The number ${number} is Even`) : console.info(`The number: ${number} is Odd`);

}
numEvenOdd(29);




/*
14) Programa una función para convertir grados Celsius a Fahrenheit y viceversa, pe. miFuncion(0,"C") devolverá 32°F.*/