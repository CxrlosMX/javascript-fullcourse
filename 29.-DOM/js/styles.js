//getting styles with JS
const $linkDOM=document.querySelector(".link-dom");
// returns a map with all the CSS properties that it accepts
console.log($linkDOM.style);

//If you want to get a property in specific
console.log($linkDOM.style.backgroundColor);

// The getComputedStyle() method gets all the actual (computed) CSS property and values of the specified element.
console.log(window.getComputedStyle($linkDOM));

console.log(window.getComputedStyle($linkDOM).getPropertyValue("color"));

// how to apply styles with JS?
$linkDOM.style.setProperty("text-decoration","none");
$linkDOM.style.setProperty("font-size","20px");
$linkDOM.style.setProperty("display","block");
$linkDOM.style.setProperty("width","150px");


//Another form to apply styles with JS
$linkDOM.style.height="50px";
$linkDOM.style.textAlign="center";
$linkDOM.style.padding="30px";
$linkDOM.style.marginLeft="auto";
$linkDOM.style.marginRight="auto";
$linkDOM.style.borderRadius=".5rem";

console.log($linkDOM.style);

// Custom Properties CSS
// How do I access those variables?
const $html=document.documentElement; //This elements represent the tag HTML

const $body=document.body;

let varDarkColor=getComputedStyle($html).getPropertyValue("--dark-color"),varYellowColor=getComputedStyle($html).getPropertyValue("--yellow-color"), varRedColor=getComputedStyle($html).getPropertyValue("--red-color");

console.log(varDarkColor, varYellowColor, varRedColor);

//Apply a color
$body.style.backgroundColor=varYellowColor;
$body.style.color=varDarkColor;

//Change a value of a Variable CSS
$html.style.setProperty("--dark-color","pink");
//Updating the value of the variable
varDarkColor=getComputedStyle($html).getPropertyValue("--dark-color");
console.log(varDarkColor);
$body.style.backgroundColor=varDarkColor;