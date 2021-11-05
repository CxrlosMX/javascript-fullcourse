export const PI = Math.PI;

export const HI = "HI";


export let user = "CxrlosMX";
//if you will assign a export default in a variable you have to declare for the variable and then "export default"
let password = "happy";
//export default password

//only we can have one export default
export default function greeting() {
    console.log("Hi Modules +ES6");
}

export class Hello {
     constructor() {
        console.log("Hello");
    }

}