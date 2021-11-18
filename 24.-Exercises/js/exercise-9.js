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

//countletters(`Hello World`);

/*
19) Program a function that validates that a text is a valid name, eg. myFunction ("Carlos Rendon") will return true.
*/
const validname = (name = "") => {
    if (!name) return console.warn(`Please introduce a name`);
    if (typeof name !== `string`) return console.error(`Please introduce a string text`);
    //\s: or for spaces
    let exp = /^[A-Za-zÑñÁáÉéÍíÓóÚú\s]+$/g.test(name);
    return (exp) ? console.info(`This name is valid`) : console.info(`This name is not valid`);
}
//validname(`Luis Carlos`);


/*
20) Program a function that validates that a text is a valid email, eg. myFunction ("cxrlosmx@gmail.com") will return true.
*/
const validEmail = (email = "") => {
    if (!email) return console.warn(`Please introduce a name`);
    if (typeof email !== `string`) return console.error(`Please introduce a string text`);

    let exp = /[a-z0-9]+(\.[_a-z0-9+]*@[a-z0-9-]+)*(\.[a-z]{2,15})/g.test(email);
    return (exp) ? console.info(`This email is valid`) : console.info(`This email is not valid`);
}
validEmail(`cxrlosmx@gmail.com`);