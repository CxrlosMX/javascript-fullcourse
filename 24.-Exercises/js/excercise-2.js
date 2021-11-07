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