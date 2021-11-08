//2).-Program a function that returns the text trimmed according to the number of characters indicated, eg. myFunction ("Hello World", 4) will return "Hello".
function textNumber(word, number) {
    if (typeof word == 'string') {
        let t = "";
        for (let i = 0; i < number; i++) {
            t += word.charAt(i);
        }
        return t;
    }
    return "No caracter";
}
//console.log(textNumber("Hola", 2));

//Exercise resolved with arrow functions and methods of the classes string
const numberText = (text = "", number) => (text != "" && typeof text == 'string') ? console.log(text.slice(0, number)) : console.warn("Please introduce a correct value");

numberText("CxrlosMX", 2);