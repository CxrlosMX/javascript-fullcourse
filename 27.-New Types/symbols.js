// Symbol
//----------------------
// Example: Dont using Symbo
//let id_1="hi";
// let id_2="hi";
// console.log(id_1===id_2);
// --------------------Sintaxis:Symbol([description])
let id_1=Symbol("id");
let id_2=Symbol("id2");
console.log(id_1===id_2);
console.log(id_1,id_2);
console.log(typeof id_1,typeof id_2);

// 
const NAME=Symbol("Name");
const GRETING=Symbol("Greting");
const person={
    [NAME]:"CxrlosMX",
    age:20
};

console.log(person);

person.NAME="Jon";
console.log(person);
console.log(person.NAME);
// HOW TO CALL A SYMBOL
console.log(person[NAME]);

person[GRETING]=function () {
    console.log(`Hi`);
};
console.log(person);
person[GRETING]();
//traveling the object
for (let propiedades in person) {
   console.log(propiedades);
   console.log(person[propiedades]);
}
//How to see the symbols? With the method, Object.getOwnPropertySymbols
console.log(Object.getOwnPropertySymbols(person));