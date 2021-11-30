// To indicate that we will work with genetars you have to add a 
//The yield expression //returns an object with two properties, “value” which is the actual value and “done” which is a boolean value, it returns true when generator function is full completed else it returns false
function* iterable() {
    yield "Hi";
    console.log("Hi console");
    yield "Hi 2";
    console.log("Continue with the instrucctions");
    yield "Hi 3";
    yield "Hi 4";
}
let i = iterable();
// console.log(i.next());
// console.log(i.next());
// console.log(i.next());
// console.log(i.next());
// console.log(i.next());

for (let y of i) {
    console.log(y);
}

//How to save those values ​​in an array?
const arr = [...iterable()];
console.log(arr);


function square(value) {
    setTimeout(() => {
      return console.log({value, result : value * value});
    }, Math.random() * 1000);
   
}
function* generator() {
    console.log("Start Generator");
    yield square(0);
    yield square(1);
    yield square(2);
    yield square(3);
    yield square(4);
    yield square(5);
    console.log("Finish");
}
let gen=generator();
for (let g of gen) {
    console.log(g);
}