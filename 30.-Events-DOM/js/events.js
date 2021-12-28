// what is a event in JS?
/*
JavaScript's interaction with HTML is handled through events that occur when the user or the browser manipulates a page. When the page loads, it is called an event. When the user clicks a button, that click too is an event. Other examples include events like pressing any key, closing a window, resizing a window, etc.
*/
// ONE FORM(BAD PRACTICE)
function hiWorld() {
    alert("Hi World");
    console.log(event);
}

// SECOND FORM(EVENT HANDLING)
const $eventHandling = document.getElementById("event-handling");
// It must be equal to the function but without parentheses---If we add the parentheses the function is executed when reloading and not when the event is executed
$eventHandling.onclick = hiWorld;
// The same event but using arrow functions
$eventHandling.onclick = () => alert(`Hello this is an event`);



// Third Form
// The great advantage is that we can add more than one function to the same element
const $multipleEvent = document.getElementById("multiple-event");
// The document.addEventListener() method attaches an event handler to the document. Tip: Use the document.removeEventListener() method to remove an event handler
if ($multipleEvent) {
    $multipleEvent.addEventListener("click", hiWorld);
    $multipleEvent.addEventListener("click", (e) => {
        alert(`This is a multiple event`);
        console.log(e);
        console.log(e.type);
        console.log(e.targets);
    });
}