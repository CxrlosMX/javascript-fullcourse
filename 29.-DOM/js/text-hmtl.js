// How to interact with HTML content?

const $whatIsDOM=document.getElementById("what-is");

let text=`
    <p>Document Object Model(<b><i>DOM</i></b>) is a API and is used with HTML documents and XML</p>
    <p><mark>DOM is an important part of JS, is an API</mark></p>
`;

// The innerText property sets or returns the text content of the specified node, and all its descendants. but no is a good practice use this methos
$whatIsDOM.innerText(text);

// The correct  method to add text in the document HTML
$whatIsDOM.textContent(text);

//If you want to add text with tags HTML you can use this method
$whatIsDOM.innerHTML(text);

$whatIsDOM.outerHTML(text);