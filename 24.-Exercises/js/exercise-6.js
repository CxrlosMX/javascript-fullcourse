
/* 9) Program a function that obtains a random number between 501 and 600.
*/
const randomNumber = (max = undefined, min = undefined) => (max === undefined) ? console.warn("Please introduce the first value") : (min === undefined) ? console.warn(`Please introduce the second value`) : console.log((Math.round(Math.random() *max-min) + min));

randomNumber(5,1);

function randomN(max, min) {
    return Math.floor(Math.random() * max - min) + min;
}
console.log(randomN(15, 1));

/*
10) Programa una función que reciba un número y evalúe si es capicúa o no (que se lee igual en un sentido que en otro), pe. miFuncion(2002) devolverá true.
11) Programa una función que calcule el factorial de un número (El factorial de un entero positivo n, se define como el producto de todos los números enteros positivos desde 1 hasta n), pe. miFuncion(5) devolverá 120.*/