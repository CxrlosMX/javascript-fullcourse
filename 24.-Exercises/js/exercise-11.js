
//24) Program a function that, given an array of numbers, returns an object with two arrays, the first will have the numbers ordered in ascending order and the second in descending order, eg. myFunction ([7,5,7,8,6]) will return {asc: [5,6,7,7,8], dec: [8,7,7,6,5]}.
const orderArray = (arr = undefined) => {
    if (arr === undefined) return console.warn(`Please introduce a value`);
    if (!(arr instanceof Array)) return console.error(`Please introduce an array object`);
    if (arr.length === 0) return console.warn(`Please introduce an array`);

    for (let i of arr) {
        if (typeof i !== `number`) return console.warn(`The value ${i} is not a number`);
    }

    return console.info({
        arr,
        upward:arr.map(el=>el).sort(),
        descendant:arr.map(el=>el).sort().reverse()

    });
}

orderArray([7, 5,7,8,6]);



