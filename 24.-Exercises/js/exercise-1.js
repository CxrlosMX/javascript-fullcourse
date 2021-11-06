// 1) Program a function that counts the number of characters in a text string, eg. myFunction ("Hello World") will return 10.

function lenghtText(text) {
    if (typeof Text) {
        let j = 0;
        for (let i = 0; i < text.length; i++) {
            j += 1;
        }
        return j;
    }
    return 0;
}
console.log(`The string has a length of ${lenghtText("My names is CxrlosMX")}`);



//2).-Program a function that returns the text trimmed according to the number of characters indicated, eg. myFunction ("Hello World", 4) will return "Hello".
function textNumber(word, number) {
     if (typeof word) {
    let t="";
    for (let i = 0; i < number; i++) {
        t += word.charAt(i);
    }
    return t;
    }
     return "No caracter";
}
console.log(textNumber(1, 2));

/*
2) Programa una función que te devuelva el texto recortado según el número de caracteres indicados, pe. miFuncion("Hola Mundo", 4) devolverá "Hola".
3) Programa una función que dada una String te devuelva un Array de textos separados por cierto caracter, pe. miFuncion('hola que tal', ' ') devolverá ['hola', 'que', 'tal'].
4) Programa una función que repita un texto X veces, pe. miFuncion('Hola Mundo', 3) devolverá Hola Mundo Hola Mundo Hola Mundo.
*/