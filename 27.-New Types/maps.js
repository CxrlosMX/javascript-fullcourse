// Map is a collection of elements where each element is stored as a Key, value pair. Map object can hold both objects and primitive values as either key or value.
const map=new Map();

// to add values
map.set("name","Cxrlos");
map.set("last name","MX");
map.set("age",20);

console.log(map);
// Return the size of the Map
console.log(map.size);

// method to evaluate if an element exists
console.log(map.has("name"));

// method to get a value
console.log(map.get("name"));
// method to modify a value
map.set("name","Luis");
console.log(map.get("name"));

// method to remove a value
map.delete("last name");
console.log(map.get("last name"));
console.log(map);

// -----How do we traverse a map?
for (let [key,value] of map) {
    console.log(`Key: ${key}, Value: ${value}`);
}

// bad practice
map.set(19,"19");
map.set(false,"false");
map.set({},{});
console.log(map);
for (let [key,value] of map) {
    console.log(`Key: ${key}, Value: ${value}`);
}

// Another form to add values in the map
const map2=new Map([
    ["name","Michael"],
    ["age",30],
    ["animal","Dog"],
    [null,"null"]
]);

console.log(map2);

const keysMap2=[...map2.keys()];
const valuesMap2=[...map2.values()];
console.log(keysMap2);
console.log(valuesMap2);