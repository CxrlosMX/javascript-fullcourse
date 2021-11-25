// Sets are a new object type included in ES6 that allow the creation of collections of unique values. The values in a set can be either simple primitives like strings and integers or more complex object types like object literals or arrays. Think of sets as an array with no repeated elements
// One form to create
const set = new Set([1, 2, , 3, 3, 4, 5, true, false, false, {}, {}, "hi", "HELLO"]);
console.log(set);
// to see the length
console.log(set.size);

//--------- Two form to create
const set2 = new Set();
set2.add(1);
set2.add(2);
set2.add(3);
set2.add(3);
set2.add(true);
set2.add(false);
set2.add(false);
set2.add({});
set2.add({});
set2.add("Hi");

console.log(set2);


// how we go through the Set
console.log(`Set`);
for (item of set) {
    console.log(item);
}
console.log(`Set 2`);
set2.forEach(item => console.log(item));

// how we access an element of a position?
// we convert our Set to an arrangement
let arr = Array.from(set);
console.log(arr[7]);

// How do we eliminate values?
set.delete("HELLO");
console.log(set);

// --------How to check if an element exists?
console.log(set.has("hi"));
console.log(set.has(10));

// ----------How do we clean our set?
set2.clear();
console.log(set2);