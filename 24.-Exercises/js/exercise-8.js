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
//convert(83, 2);



/*
16) Program a function that returns the final amount after applying a discount to a given amount, eg. myFunction (1000, 20) will return 800. */
const discount = (total = undefined, discount = 0) => {
    if (total === undefined) return console.error(`Please introduce the total`);
    if (typeof total !== `number`) return console.warn(`Please the total need to be of type "number"`);
    if (total <= 0) return console.warn(`Total can´t be negative or zero`);
    if (typeof discount !== `number`) return console.warn(`Discount need to be of type Number`);
    if (discount < 0) return console.warn(`Discount can´t be negative or zero`);

    return console.info(`${total}$-${discount}%= ${total - ((total * discount) / 100)}`);
};
discount(1000, 20);

/*
17) Programa una función que dada una fecha válida determine cuantos años han pasado hasta el día de hoy, pe. miFuncion(new Date(1984,4,23)) devolverá 35 años (en 2020).
*/