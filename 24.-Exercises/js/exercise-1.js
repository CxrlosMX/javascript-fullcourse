// 1) Program a function that counts the number of characters in a text string, eg. myFunction ("Hello World") will return 10.

function lenghtText(text) {
    if (typeof text=='string') {
        let j = 0;
        for (let i = 0; i < text.length; i++) {
            j += 1;
        }
        return j;
    }
    return "You have to introduce only String caracters";
}
console.log(`The string has a length of ${lenghtText("Hola")}`);





/*
3) Programa una función que dada una String te devuelva un Array de textos separados por cierto caracter, pe. miFuncion('hola que tal', ' ') devolverá ['hola', 'que', 'tal'].
4) Programa una función que repita un texto X veces, pe. miFuncion('Hola Mundo', 3) devolverá Hola Mundo Hola Mundo Hola Mundo.
*/