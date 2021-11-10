
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
    if(typeof number!==`number`)return console.error("Please introduce a number");
    number = number.toString();
    if (number.split(``).reverse().join(``) === number) {
        return console.info(true);
    }
    return console.info(false);
}
capicuaNumber(2002);

/*
11) Programa una función que calcule el factorial de un número (El factorial de un entero positivo n, se define como el producto de todos los números enteros positivos desde 1 hasta n), pe. miFuncion(5) devolverá 120.*/