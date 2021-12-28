// Event flow is the order in which event is received on the web page. If you click on an element like on div or on the button , which is nested to other elements, before the click is performed on the target element.

//Event Bubbling-->Event Bubbling is the event starts from the deepest element or target element to its parents, then all its ancestors which are on the way to bottom to top. At present, all the modern browsers have event bubbling as the default way of event flow
const $divsEvents = document.querySelectorAll(".event-flow div");
const $linkEvent=document.querySelector(".event-flow a");
console.log($divsEvents);

function eventFlow(e) {
    console.log(`Hi im ${this.className}, the click is from ${e.target.className}`);
    // The stopPropagation() method prevents propagation of the same event from being called. Propagation means bubbling up to parent elements or capturing 
    e.stopPropagation();
}


// add events dynamically
$divsEvents.forEach(div => {
    //Event Bubbling
    //div.addEventListener("click", eventFlow, false);
    //----- Event Capturing :Event Capturing is the event starts from top element to target element.Modern browser doesn’t support event capturing by default but we can achieve that by code in JavaScript.
    //div.addEventListener("click", eventFlow, true);

    //We can use a object with the values 
    div.addEventListener("click", eventFlow, {
        capture: false, /*Event Bubbling: false Event Capturing:true*/

        // to run only once is like removeEventListener
        //once: true
    });
});

$linkEvent.addEventListener("click",(e)=>{
    alert("Hi i`m CxrlosMX");
    // The preventDefault() method cancels the event if it is cancelable, meaning that the default action that belongs to the event will not occur. 
    e.preventDefault();
    e.stopPropagation();
});
