const json = {
    strig: "CxrlosMX",
    number: 20,
    booleano:true,
    array: ["run", "program", "cook"],
    object: {
        twitter: "@cxrlosmx",
        instagram: "@dev_cxrlosmx"
    },
    nulo: null
};
// JSON parsing(parse()) is the process of converting a JSON object in text format to a Javascript object that can be used inside a program.


console.log(json);
console.log("{}");
console.log(`JSON parse()`);
console.log(JSON.parse("{}"));
console.log("[1,2,3,4,5]");
console.log(JSON.parse("[1,2,3,4,5]"));
console.log("true");
console.log(JSON.parse("true"));

//JSON. stringify() method converts JavaScript data to a JSON-formatted string
//JSON. stringify()
console.log("JSON. stringify()");
console.log(JSON.stringify({}));
console.log(JSON.stringify([1,2,3]));
console.log(JSON.stringify(true));
console.log(JSON.stringify(false));
console.log(JSON.stringify({x1:1,x2:2}));
console.log(JSON.stringify(json));