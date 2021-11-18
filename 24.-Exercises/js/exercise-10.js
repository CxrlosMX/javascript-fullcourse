/*
21) Program a function that, given a numerical array, returns another array with the numbers squared, eg. my_function ([1, 4, 5]) will return [1, 16, 25].
*/
const squaring=(arrayNumber=undefined)=>{
    if(!arrayNumber) return console.warn(`Please introduce a value`);
    if(!(arrayNumber instanceof Array)) return console.error(`Please introduce an array object`);
    for (let i = 0; i < arrayNumber.length; i++) {
        arrayNumber[i]=Math.pow(arrayNumber[i],2);
    }
    return console.info(arrayNumber);
}
squaring([1,4,5]);

