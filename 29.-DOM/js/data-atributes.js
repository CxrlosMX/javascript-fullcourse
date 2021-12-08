
// ATRIBUTES
console.log(document.documentElement.lang);

console.log(document.querySelector(".link-dom").href);

console.log(document.querySelector(".link-dom").getAttribute("href"));

// how to assign a new value
document.documentElement.lang = "es";
console.log(document.documentElement.lang);
//Changing the value
//The setAttribute() method adds the specified attribute to an element, and gives it the specified value.
document.documentElement.setAttribute("lang", "es-MX");
console.log(document.documentElement.lang);

//$, is used when we store DOM elements in variables
const $linkDOM = document.querySelector(".link-dom");

$linkDOM.setAttribute("target", "_blank");
//lements instructs the browser to navigate to the target resource without granting the new browsing context access to the document 
$linkDOM.setAttribute("rel", "noopener");
// We can modify the route
$linkDOM.setAttribute("href", "https://github.com/CxrlosMX");

// we can check if an element exists or not
console.log($linkDOM.hasAttribute("href"));
console.log($linkDOM.hasAttribute("name"));
console.log($linkDOM.hasAttribute("rel"));

// We can remove some elements
$linkDOM.removeAttribute("rel");
console.log($linkDOM.hasAttribute("rel"));

// DATA-ATRIBUTES
console.log($linkDOM.getAttribute);
console.log($linkDOM.getAttribute("data-description"));
// The dataset JavaScript is a document-oriented module (DOM) property to access the data attribute and set it on the JavaScript element.
console.log($linkDOM.dataset);

// If you wanto get a data you can do this
console.log($linkDOM.dataset.description);
console.log($linkDOM.dataset.id);

// assign new values
$linkDOM.setAttribute("data-description", "Modelo de Objeto del Documento");
console.log($linkDOM.dataset.description);

//Another form
$linkDOM.dataset.description="Follow me in GitHub";
console.log($linkDOM.dataset.description);

//Cheking if exist a data-attribute
console.log($linkDOM.hasAttribute("data-description"));
console.log($linkDOM.hasAttribute("data-id"));

//Removing
$linkDOM.removeAttribute("data-id");
console.log($linkDOM.hasAttribute("data-id"));

