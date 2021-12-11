// We gonna create a new dinamic element with JS

// The createElement() method creates an Element Node with the specified name.
const $figure = document.createElement("figure"),
    $img = document.createElement("img"),
    $figcaption = document.createElement("figcaption"),
    $figcaptionText = document.createTextNode("Animals"),
    $cards = document.querySelector(".cards");

//The createTextNode() method creates a Text Node with the specified text. Tip: Use the createElement() method to create an Element Node with the specified name.

//Before adding the tag you must add the components that will contain it

// The setAttribute() method adds the specified attribute to an element:... setAttribute("property", "value")
$img.setAttribute("src", "https://placeimg.com/200/200/animals");
$img.setAttribute("alt", "Animals");

$figcaption.appendChild($figcaptionText);

$figure.appendChild($img);
$figure.appendChild($figcaption);

//We apply the class:The classList property returns the class name(s) of an element, as a DOMTokenList object. This property is useful to add
$figure.classList.add("card");

// The appendChild() method appends a node as the last child of a node.
$cards.appendChild($figure);

// ------dynamically creating a list
document.write("<h3>Seasons of the Year</h3>");

const seasons = ["Spring", "Summer", "Fall", "Winter"],
    $ul = document.createElement("ul");

//Add the elemento
document.body.appendChild($ul);

seasons.forEach(
    el => {
        const $li = document.createElement("li");
        $li.textContent = el;
        $ul.appendChild($li);
    }
);

const continents = ["North America", "Europe", "Africa", "Asia"],
    $ul2 = document.createElement("ul");

document.write("Continents");
document.body.appendChild($ul2);

$ul2.innerHTML = "";

continents.forEach(el => {

    $ul2.innerHTML += `<li>${el}</li>`;
});

///-----Solution to make a single request: Is the best option to use because dont need a lot of means
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
    $ul3 = document.createElement("ul"),
    $fragment = document.createDocumentFragment();
// The createDocumentFragment() method creates an imaginary Node object, with all the properties and methods of the Node object. The createDocumentFragment() method is usefull when you want to extract parts of your document, change, add, or delete, some of the content, and insert it back to your document.

months.forEach(
    el => {
        const $li = document.createElement("li");
        $li.textContent = el;
        $fragment.appendChild($li);
    }
);

document.write("<h3>Months</h3>");
$ul3.appendChild($fragment);
document.body.appendChild($ul3);