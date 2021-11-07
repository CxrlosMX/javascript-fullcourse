//3) Programa una función que repita un texto X veces, pe. miFuncion('Hola Mundo', 3) devolverá Hola Mundo Hola Mundo Hola Mundo.
function repitWord(number, word) {
    if (typeof word == 'string') {
        let text="";
        for (let i = 0; i < number; i++) {
            text+=word+"  "
        }
        return text;
    }
       return `please introduce a correct value(String)`;
    
}

console.log(repitWord(4,3));
