/*
21) Program a function that, given a numerical array, returns another array with the numbers squared, eg. my_function ([1, 4, 5]) will return [1, 16, 25].
*/
const squaring = (arrayNumber = undefined) => {
    if (arrayNumber === undefined) return console.warn(`Please introduce a value`);
    if (!(arrayNumber instanceof Array)) return console.error(`Please introduce an array object`);
    if (arrayNumber.length === 0) return console.warn(`Please introduce an array`);

    for (let i of arrayNumber) {
        if (typeof i !== `number`) return console.warn(`All elements need to be of type number`);
    }

    /*
    One-Form
    for (let i = 0; i < arrayNumber.length; i++) {
        arrayNumber[i] = Math.pow(arrayNumber[i], 2);
    }*/
    //Second-Form
    const newArr = arrayNumber.map(el => el * el);

    return console.info(`Normal array: ${arrayNumber}, New Array: ${newArr}`);
}
//squaring([1, 4, 5]);

/*
22) Program a function that, given an array, returns the highest and lowest number of said array, eg. myFunction ([1, 4, 5, 99, -60]) will return [99, -60].
*/
const biggernumber = (arrayNumbers = undefined) => {
    if (arrayNumbers === undefined) return console.warn(`Please introduce a value`);
    if (!(arrayNumbers instanceof Array)) return console.error(`Please introduce an array object`);
    if (arrayNumbers.length === 0) return console.warn(`Please introduce an array`);

    for (let i of arrayNumbers) {
        if (typeof i !== `number`) return console.warn(`The value ${i} is not a number`);
    }
    /*
    One-Form
    let bigger = 0;
    let minor = 0;

    for (let i = 0; i < arrayNumbers.length; i++) {
        if (arrayNumbers[i] < minor) {
            minor = arrayNumbers[i];
        }
        if (arrayNumbers[i] > bigger) {
            bigger = arrayNumbers[i];
        }

    }
    return console.info(`Bigger: ${bigger}, Minor: ${minor}`);
*/
    return console.info(`Original Array ${arrayNumbers}\n Bigger: ${Math.max(...arrayNumbers)}\nMinor: ${Math.min(...arrayNumbers)}`);
}
//biggernumber([1,4,6,90,-60,-80,100,2000]);


/*
23) Program a function that, given an array of numbers, returns an object with 2 arrangements in the first one, it stores the even numbers and the odd ones in the second, eg. myFunction ([1,2,3,4,5,6,7,8,9,0]) will return {even: [2,4,6,8,0], odd: [1,3,5,7 , 9]}.
*/
const separatenumbers = (arrayNumbers = undefined) => {
    if (arrayNumbers === undefined) return console.warn(`Please introduce a value`);
    if (!(arrayNumbers instanceof Array)) return console.error(`Please introduce an array object`);
    if (arrayNumbers.length === 0) return console.warn(`Please introduce an array`);

    for (let i of arrayNumbers) {
        if (typeof i !== `number`) return console.warn(`The value ${i} is not a number`);
    }
    return console.info({
        even: arrayNumbers.filter(num => num % 2 === 0),
        odd: arrayNumbers.filter(num => num % 2 === 1)
    });

}
separatenumbers([1,2,3,4,5,6,7,8,9,0]);

