//5) Program a function that inverts the words of a text string. eg: myFunction ("Hello") -> will return "aloH"
const toInvest = (text = "") => (!text) ? console.warn(`Please introduce String text`) : console.info(text.split(``).reverse().join(``));

//toInvest("Hi");



//6) Program a function to count the number of times a word is repeated in a long text, eg: myFunction ("Hello World bye World", "world") will return 2. 
const countWord = (text = "", word = "") => {
    if (!text) return console.warn(`Please introduce text`);
    if (!word) return console.warn(`Please introduce the word`);
    let c = 0, i = 0;
    while (i !== -1) {
        i = text.indexOf(word, i);
        if (i !== -1) {
            i++;
            c++;
        }
    }
    return console.log(`the word is repeating: ${c}`);
};

countWord("Hola mundo, adios mundo","mundo");