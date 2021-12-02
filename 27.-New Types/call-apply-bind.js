/*
The call() method is a predefined JavaScript method. It can be used to invoke (call) a method with an owner object as an argument (parameter). With call() 
The bind() method creates a new function, when invoked, has the this sets to a provided value. 
*/

console.log(this);
this.place = "Global Context";

function greeting(greeting, who) {
    console.log(`${greeting} ${who} from ${this.place}`);
}

greeting("Hello", "Miguel");

const obj = {
    place: "Obj Context"
}
greeting.call(obj, "Hi", "CxrlosMX");
greeting.call(null, "Hi", "CxrlosMX");
greeting.call(this, "Hi", "CxrlosMX");
greeting.apply(obj, ["Bye", "Luis"]);
greeting.apply(null, ["Bye", "Luis"]);
greeting.apply(this, ["Bye", "Luis"]);

const person={
    name:"Luis",
    greeting: function() {
        console.log(`Hi ${this.name}`);
    }
};
person.greeting();

const person2={
    greeting:person.greeting.bind(person)
}
person2.greeting();