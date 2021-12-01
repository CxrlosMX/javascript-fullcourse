console.log(this);
console.log(window);
console.log(this === window);
this.name = "Global context";
console.log(this.name);

function show() {
    console.log(this.name);
}
show();

const obj = {
    name: "Object Context",
    show: function () {
        console.log(this.name);
    }
};
obj.show();

const obj2 = {
    name: "Object Context 2",
    show
};
obj2.show();

const obj3 = {
    name: "Object Context 3",
    show: () => {
        console.log(this.name);
    }
};
obj3.show();

function Person(name) {
    this.name = name;
    // return console.log(this.name);
    // return function () {
    //     console.log(this.name);
    // }
    return  ()=> {
        console.log(this.name);
    }
}
let cxrlos = new Person(`CxrlosMX`);
cxrlos();

