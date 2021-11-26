// WeakSet in JavaScript is used to store a collection of objects. It adapts the same properties of that of a set i.e. does not store duplicates. The major difference of a WeakSet with the set is that a WeakSet is a collection of objects and not values of some particular type. Syntax: new WeakSet(object)
const ws = new WeakSet();
// to store values you need to add them one by one
let v1 = { "value 1": 1 };
let v2 = { "value 2": 2 };
let v3 = { "value 3": 3 };
ws.add(v1);
ws.add(v2);
ws.add(v3);

// console.log(ws);
// console.log(ws.has(v1));
// console.log(ws.has(v2));

//Delete a object in the WeakSet
ws.delete(v3);
//console.log(ws);

//setInterval(()=> console.log(ws),1000);

// setTimeout(()=>{
//     v1=null;
//     v2=null;
//     v3=null;
// });

// WeakMap is a new Data Structure or Collection introduced in ES6. WeakMaps allows you to store a collection of Key-Value pairs. It adopts the same properties of Map. The Major difference is that keys of WeakMap cannot be a primitive data type.
const wm = new WeakMap();
let key1 = {};
let key2 = {};
let key3 = {};

wm.set(key1, 1);
wm.set(key2, 2);
wm.set(key3, 3);
console.log(wm);
// To chek if a element exist in the WeakMap(has)
console.log(wm.has(key2));
console.log(wm.has(key3));
// We gonna get a value
console.log(wm.get(key2));
// Delete a element
//wm.delete(key1);
console.log(wm);

// setInterval(()=> console.log(wm),1000);

// setTimeout(()=>{
//     key1=null;
//     key2=null;
//     key3=null;
// });