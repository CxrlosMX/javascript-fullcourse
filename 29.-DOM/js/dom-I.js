// https://developer.mozilla.org/es/docs/Web/API/Node/nodeType

//Methods that used to be used in the past

// 1.-getElementsByTagName() The getElementsByTagName method of Document interface returns an HTMLCollection of elements with the given tag name.
console.log(document.getElementsByTagName("li"));

// 2.-The getElementsByClassName method of Document interface returns an array-like object of all child elements which have all of the given class name(s)
console.log(document.getElementsByClassName("card"));

// 3.-The getElementsByName() method returns a collection of all elements in the document with the specified name (the value of the name attribute)
console.log(document.getElementsByName("name"));

// 4.-The getElementById() method returns the element that has the ID attribute with the specified value. This method is one of the most common methods in the HTML
console.log(document.getElementById("menu"));

// *****This is what is used today
// The querySelector() method returns the first element that matches a specified CSS selector(s) in the document. 
console.log(document.querySelector("#menu")); //This method is more slow

//queryselector for link
console.log(document.querySelector("a"));

//If you want to get a lot of elementos you have to use querySelectorAll();
// querySelectorAll() The Document method querySelectorAll() returns a static (not live) NodeList representing a list of the document's elements that match the specified group of selectors
console.log(document.querySelectorAll("a"));
console.log(document.querySelectorAll("a").length);

// Class
console.log(document.querySelectorAll(".card"));
//You can get the value in an specific position
console.log(document.querySelectorAll(".card")[2]);

//ForEach with Node list
document.querySelectorAll("a").forEach(i=>console.log(i));

//Get elements in a class or Id
console.log(document.querySelectorAll("#menu li"));

// next:63