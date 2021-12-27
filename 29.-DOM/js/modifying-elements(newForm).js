// NEW FORMs TO ADD ELEMENTS
/* Some methods to add elements
    °insertAdjacent...
    -insertAdjacentElement(position,el),
    -insertAdjacentHTML(position,html),
    -insertAdjacentText(position,text)

    Positions
    beforebegin(previous brother);
    afterbegin(first son);
    beforeend(last son);
    afterend(next brother);
    */
const $cards = document.querySelector(".cards"),
    $newCard = document.createElement("figure");

//adding card content
$newCard.innerHTML = `
    <img src="https://placeimg.com/200/200/any" alt="Any">
    <figcaption>Any</figcaption>
`;
$newCard.classList.add("card");

// Adding the element with-->insertAdjacentElement():The insertAdjacentElement() method inserts a the specified element into a specified position
$cards.insertAdjacentElement("beforebegin", $newCard);


// Using the all methods
let $contentCard = `
<img src="https://placeimg.com/200/200/animals" alt="Any">
<figcaption></figcaption>
`;

const $nCard = document.createElement("figure");

$nCard.classList.add("card");
// The insertAdjacentHTML() method inserts a text as HTML, into a specified position.
$nCard.insertAdjacentHTML("afterbegin", $contentCard);

// ---The insertAdjacentText() method of the Element interface, given a relative position and a string, inserts a new text node at the given
$nCard.querySelector("figcaption").insertAdjacentText("afterbegin", "Animal");
// Adding the element in the dom
$cards.insertAdjacentElement("afterbegin", $nCard);

// other ways to add items
//$cards.prepend($nCard);
//$cards.append($nCard);
//$cards.before($nCard);
//$cards.after($nCard);