
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
        upward: arr.map(el => el).sort(),
        descendant: arr.map(el => el).sort().reverse()

    });
}

//orderArray([7, 5,7,8,6]);




//25) Program a function that, given an array of elements, eliminates duplicates, eg. myFunction (["x", 10, "x", 2, "10", 10, true, true]) will return ["x", 10, 2, "10", true].
const removeDuplicates = (arr = undefined) => {
    if (arr === undefined) return console.warn(`Please introduce a value`);
    if (!(arr instanceof Array)) return console.error(`Please introduce an array object`);
    if (arr.length === 0) return console.warn(`Please introduce an array`);
    if (arr.length === 1) return console.warn(`The array neet to have 2 elements or more`);

    // return console.info({
    //     arr,
    //     withoutDuplicates:arr.filter((value,index,self)=>self.indexOf(value)===index)

    // });
    return console.info({
        arr,
        withoutDuplicates: [... new Set(arr)]

    });


};
//removeDuplicates(["x", 10, "x", 2, "10", 10, true, true]);


//26) Program a function that, given an array of numbers, obtains the average, eg. average ([9,8,7,6,5,4,3,2,1,0]) will return 4.5.
const average = (arr = undefined) => {
    if (arr === undefined) return console.warn(`Please introduce a value`);
    if (!(arr instanceof Array)) return console.error(`Please introduce an array object`);
    if (arr.length === 0) return console.warn(`Please introduce an array`);
    if (arr.length === 1) return console.warn(`The array neet to have 2 elements or more`);
    for (let i of arr) {
        if (typeof i !== `number`) return console.warn(`The value ${i} is not a number`);
    }

    return console.info(
        arr.reduce((total, num, index, arr) => {
            total += num;
            if(index===arr.length-1){
                return `The average is: ${total/arr.length}`
            }
            else{
                return total;
            }
        })
    );

}
average([9,8,7,6,5,4,3,2,1,0]);
