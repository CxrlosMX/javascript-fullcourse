//3)3) Program a function that repeats a text X times, eg. myFunction ('Hello World', 3) will return Hello World Hello World Hello World.
function repitWord(number, word) {
    if (typeof word == 'string') {
        let text = "";
        for (let i = 0; i < number; i++) {
            text += word + "  "
        }
        return text;
    }
    return `please introduce a correct value(String)`;

}

//console.log(repitWord(3,"CxrlosMX"));

const repitText = (word = "", number = undefined) => {
    if (!word) return `Please introduce all a String of text`;
    if(!typeof word=='string')return `Please introduce text of type String`;
    if(number===undefined)return `Please introduce the value Integer`;
    if(number<=0 ) return `please introduce a positive number`;
    let t="";
    for (let i = 0; i <number; i++) {
        t+=word+" ";
    }
    return t;
};
console.log(repitText(`CxrlosMX`,10));
