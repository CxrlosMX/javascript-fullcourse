//3)3) Program a function that repeats a text X times, eg. myFunction ('Hello World', 3) will return Hello World Hello World Hello World.
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
