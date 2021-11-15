/*
15) Program a function to convert numbers from binary base to decimal and vice versa, eg. myFunction (100,2) will return 4 base 10.
*/
const convert = (number = undefined, base = undefined) => {
    if (number === undefined) return console.warn(`Please introduce a number`);
    if (base === undefined) return console.warn(`Please introduce the base`);
    if (typeof number !== 'number' && typeof base !== `number`) return console.warn(`All parameters needs to be of type number`);
    switch (base) {
        case 2: {
            return console.info(`${number} base ${base}= ${parseInt(number, base)} base 10`);
            break;
        }
        case 10: {
            return console.info(`${number} base ${base}= ${(number.toString(2))} base 2`);
            break;
        }
        default: {
            console.error(`In the parameters "base" you only can introduce 2 or 10`);
            break;
        }
    }
}
convert(83, 2);



/*
16) Programa una función que devuelva el monto final después de aplicar un descuento a una cantidad dada, pe. miFuncion(1000, 20) devolverá 800.
17) Programa una función que dada una fecha válida determine cuantos años han pasado hasta el día de hoy, pe. miFuncion(new Date(1984,4,23)) devolverá 35 años (en 2020).
*/