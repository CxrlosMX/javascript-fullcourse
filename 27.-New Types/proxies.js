
//A JavaScript Proxy is an object that wraps another object (target) and intercepts the fundamental operations of the target object. The fundamental operations can be the property lookup, assignment, enumeration, and function invocations, etc. 
const person = {
    name: "",
    lastaname: "",
    age: 0
}
const handler = {
    set(obj, property, value) {
        if (Object.keys(obj).indexOf(property) === -1) {
            return console.error(`This property ${property} dont exist`);
        }
        if (
            (property === "name" || property === "lastname") &&
            !(/^[A-Za-zÑñ\s]+$/g.test(value))
        ) {
            return console.error(`The property ${property} only can have letter and speces`);
        }
        if(property==="age" && value<0){
            return console.error(`The property ${property} need yo be a positive number`);
        }

        obj[property] = value;
    }
}
const cxrlos = new Proxy(person, handler);
cxrlos.name = "Cxrlos12";
cxrlos.lastaname = "MX";
cxrlos.age = -20;
cxrlos.instagram = "@cxrlosmx";
console.log(cxrlos);

console.log(person);