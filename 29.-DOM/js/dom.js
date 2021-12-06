// 
console.log(`**************Document elements**************`);
console.log(window.document);
console.log(document.head);
console.log(document.body);

// If you want to get the HTML elements you have to write this:
console.log(document.documentElement);
console.log(document.doctype);
console.log(document.characterSet);
console.log(document.title);
// You can get the links or images
console.log(document.links);
console.log(document.images);
console.log(document.forms);

// styleSheets in the document
console.log(document.styleSheets);
// JS
console.log(document.scripts);

// Returns the selected content in the current document as a string()
setTimeout(()=>{
    console.log(document.getSelection().toString());
},3000);

// bad practice
console.log(document.write("<h2>CxrlosMX</h2>"));

