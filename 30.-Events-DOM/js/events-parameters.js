// Events with parameters
//Create a function
function greet(name = "unknown") {
    alert(`Hi ${name}`);
}
//Get the element by ID
const $multipleEvent = document.getElementById("multiple-event");

//Adding the event in the element
$multipleEvent.addEventListener("click", () => {
    greet();
    greet("CxrlosMX");
}
);

//Remove event listener
const $removeEvent = document.getElementById("remove-event");

const removeDoubleClick = (e) => {
    alert(`Removing the event of type ${e.type}`);
    console.log(e);
    // The removeEventListener() method removes an event handler that has been attached with the addEventListener() method.
    $removeEvent.removeEventListener("dblclick",removeDoubleClick);
}

$removeEvent.addEventListener("dblclick", removeDoubleClick);