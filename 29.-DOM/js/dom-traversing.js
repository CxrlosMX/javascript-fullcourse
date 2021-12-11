const $cards = document.querySelector(".cards");

console.log($cards);

///What happen if you want to get a child 

// The read-only children property returns a live HTMLCollection which contains all of the child elements of the element
console.log($cards.children);

//You can get a specific values
console.log($cards.children[2]);

//The parentElement property returns the parent element of the specified element.
console.log($cards.parentElement);

//You can get the first child and latest
console.log($cards.firstChild);
console.log($cards.firstElementChild);
console.log($cards.lastChild);
console.log($cards.lastElementChild);


//The previousSibling property returns the previous node of the specified node, in the same tree level. 
console.log($cards.previousSibling);
console.log($cards.previousElementSibling);

//The nextSibling property returns the node immediately following the specified node, in the same tree level.
console.log($cards.nextSibling);
console.log($cards.nextElementSibling);

//The closest() method searches up the DOM tree for the closest element which matches a specified CSS selector.
console.log($cards.closest("body"));

console.log($cards.children[3].closest("section"));