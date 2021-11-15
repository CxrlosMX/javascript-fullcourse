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
//discount(1000, 20);



/*
17) Program a function that, given a valid date, determines how many years have passed until today, eg. myFunction (new Date (1984,4,23)) will return 35 years (in 2020).
*/
const calculateYears = (date = undefined) => {
    if (date === undefined) return console.warn(`You have to add a date`);
    if (!(date instanceof Date)) return console.warn(`date need to be instance of Date`);
    let today = new Date().getTime() - date.getTime(),
        years = 1000 * 60 * 60 * 24 * 365,
        yearsHumans = Math.floor(today / years);
    return (Math.sign(yearsHumans) === -1) ? console.info(`Missing ${Math.abs(yearsHumans)} years to ${date.getFullYear()}`) : (Math.sign(yearsHumans) === 1) ? console.info(`Have passed ${Math.abs(yearsHumans)} years since ${date.getFullYear()}`) : console.info(`We are in the actual year ${date.getFullYear()}`);

}