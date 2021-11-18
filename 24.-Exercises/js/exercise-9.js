/*
18) Program a function that given a text string counts the number of vowels and consonants, eg. myFunction ("Hello World") returns Vowels: 3, Consonants: 7.
*/
const countletters = (text = "") => {
    if (!text) return console.warn(`Please introduce a text`);
    if (typeof text !== 'string') return console.warn(`Please introduce a string of text`);

    let vowels = 0;
    let consonant = 0;
    //converting text to lowercase
    text = text.toLocaleLowerCase();
    for (let i of text) {
        if (/[aeiouáéíóú]/.test(i)) {
            vowels++;
        }
        if (/[bcdfghjklmnñpqrstvwxyz]/.test(i)) {
            consonant++;
        }

    }
    return console.info(`Vowels: ${vowels}, Consonant: ${consonant}`);
}

countletters(`Hello World`);

/*
19) Programa una función que valide que un texto sea un nombre válido, pe. miFuncion("Carlos Rendon") devolverá verdadero.

*/
/*
20) Programa una función que valide que un texto sea un email válido, pe. miFuncion("cxrlosmx@gmail.com") devolverá verdadero.
*/