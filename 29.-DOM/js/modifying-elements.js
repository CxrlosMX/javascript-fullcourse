// Old Style---Adding a element with the position
const $cards = document.querySelector(".cards"),
    $newCard = document.createElement("figure");

//adding card content
$newCard.innerHTML = `
    <img src="https://placeimg.com/200/200/any" alt="Any">
    <figcaption>Any</figcaption>
`;
//Adding the class in the new element
$newCard.classList.add("card");

// we replace the value of the three card->The replaceChild() method replaces a child node with a new node. The new node could be an existing node in the document, or you can create a new node
 $cards.replaceChild($newCard, $cards.children[2]);

// Adding one element before some other
// The insertBefore() method inserts a node as a child, right before an existing child, which you specify.
 $cards.insertBefore($newCard, $cards.firstElementChild);

// We can delete a element with the method-----The removeChild() method removes a specified child node of the specified element.
$cards.removeChild($cards.lastElementChild);

// Cloning elements---The cloneNode() method creates a copy of a node, and returns the clone.
const $cloneCards=$cards.cloneNode(true);

// Use the appendChild() or insertBefore() method to insert the cloned node to the document.
document.body.appendChild($cloneCards);