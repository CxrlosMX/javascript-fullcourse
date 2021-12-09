//getting styles with JS
const $linkDOM = document.querySelector(".link-dom");
// returns a map with all the CSS properties that it accepts
console.log($linkDOM.style);

//If you want to get a property in specific
console.log($linkDOM.style.backgroundColor);

// The getComputedStyle() method gets all the actual (computed) CSS property and values of the specified element.
console.log(window.getComputedStyle($linkDOM));

console.log(window.getComputedStyle($linkDOM).getPropertyValue("color"));

// how to apply styles with JS?
$linkDOM.style.setProperty("text-decoration", "none");
$linkDOM.style.setProperty("font-size", "20px");
$linkDOM.style.setProperty("display", "block");
$linkDOM.style.setProperty("width", "150px");


//Another form to apply styles with JS
$linkDOM.style.height = "50px";
$linkDOM.style.textAlign = "center";
$linkDOM.style.padding = "30px";
$linkDOM.style.marginLeft = "auto";
$linkDOM.style.marginRight = "auto";
$linkDOM.style.borderRadius = ".5rem";

console.log($linkDOM.style);

// Custom Properties CSS
// How do I access those variables?
const $html = document.documentElement; //This elements represent the tag HTML

const $body = document.body;

let varDarkColor = getComputedStyle($html).getPropertyValue("--dark-color"), varYellowColor = getComputedStyle($html).getPropertyValue("--yellow-color"), varRedColor = getComputedStyle($html).getPropertyValue("--red-color");

console.log(varDarkColor, varYellowColor, varRedColor);

//Apply a color
$body.style.backgroundColor = varYellowColor;
$body.style.color = varDarkColor;

//Change a value of a Variable CSS
$html.style.setProperty("--dark-color", "pink");
//Updating the value of the variable
varDarkColor = getComputedStyle($html).getPropertyValue("--dark-color");
console.log(varDarkColor);
$body.style.backgroundColor = varDarkColor;

//Class
console.log("-------------------class----------------");

const $card = document.querySelector(".card");

console.log($card);

// The classList property returns the class name(s) of an element, as a DOMTokenList object. 
console.log($card.classList);

//Returns a Boolean value, indicating whether an element has the specified class name. 
console.log($card.classList.contains("rotate-45"));

// How to add classes to elements with JS?
// Adds one or more class names to an element
$card.classList.add("rotate-45");
console.log($card.classList.contains("rotate-45"));

//We can delete a class of a element
//remove(class1, class2, ...): Removes one or more class names from an element.
$card.classList.remove("rotate-45");
console.log($card.classList.contains("rotate-45"));

// toggle(class, true|false) 	Toggles between a class name for an element.
/*
The first parameter removes the specified class from an element, and returns false.
If the class does not exist, it is added to the element, and the return value is true.

The optional second parameter is a Boolean value that forces the class to be added or removed, regardless of whether or not it already existed. For example:

Remove a class: element.classList.toggle("classToRemove", false);
Add a class: element.classList.toggle("classToAdd", true);

Note: The second parameter is not supported in Internet Explorer or Opera 12 and earlier.
*/
$card.classList.toggle("rotate-45");
console.log($card.classList.contains("rotate-45"));

// $card.classList.toggle("rotate-45");
// console.log($card.classList.contains("rotate-45"));

//You can replace a class with the method "replace()"
$card.classList.replace("rotate-45","rotate-135");
console.log($card.classList.contains("rotate-45"));
console.log($card.classList.contains("rotate-135"));

// We can add or remove some clases in the elements
$card.classList.add("opacity-80","sepia");
$card.classList.remove("opacity-80","sepia");