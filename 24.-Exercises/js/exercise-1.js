// 1) Program a function that counts the number of characters in a text string, eg. myFunction ("Hello World") will return 10.

function lenghtText(text) {
    if (typeof text == 'string' && text != "") {
        return text.length;
    }
    return "You have to introduce only String caracters";
}
//console.log(`The string has a length of ${lenghtText("Hi my friend")}`);

//Exmple using arrow function
const caractersText = (text = "") => (text != "" && typeof text == 'stirng') ? console.log(`The string ${text} has a length of ${text.length}`) : console.warn("Please introduce a value");

caractersText();

/*

*/