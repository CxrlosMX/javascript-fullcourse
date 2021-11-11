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
    return ((number % 2) === 0) ? console.info(`The number ${number} is Even`) : console.info(`The number: ${number} is Odd`);

}
//numEvenOdd(29);




/*
14) Program a function to convert degrees Celsius to Fahrenheit and vice versa, eg. myFunction (0, "C") will return 32 ° F.*/
const celsiusFahrenheit = (value = undefined, degrees = '') => {
    if (value === undefined) return console.warn(`Please introduce a value`);
    if (degrees === '') return console.warn(`Please introduce degrees`);
    if (typeof value !== `number`) return console.warn(`Please introduce a integer value`);
    if (typeof degrees == `char`) return console.warn(`Please introduce a string value`);
    if (degrees.length !== 1) return console.error(`Please introduce only one caracter`);
    switch (degrees) {
        case 'C': {
            // CELSIUS TO FAHRENHEIT
            let n = (value * 1.8) + 32;
            return console.info(`RESULT: ${value}ºC = ${n}ºF`);
            break;
        }
        case 'F': {
            //  FAHRENHEIT TO CELSIUS
            return console.info(`RESUL: ${value}ºF = ${Math.round((value - 32) / 1.8)}ºC`);
            break;
        }
        default: {
            return console.warn(`Please introduce: C: Celsius or F: Fahrenheit`);
            break;
        }

    }

}
celsiusFahrenheit(86, 'F');