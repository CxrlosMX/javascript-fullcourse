// BOM: The Browser Object Model (BOM) is the core of JavaScript on the web. The BOM provides you with objects that expose the web browser’s functionality.

//  innerWidth and innerHeight returns the interior width of the window in pixels. This includes the width of the vertical scroll
//console.log(window.innerWidth);
//console.log(window.innerHeight);
// Window.outerWidth and Window.outerHeight gets the outer width of the browser. Represents the total width of the window including the side bars
//console.log(window.outerWidth);
//console.log(window.outerHeight);

// The resize event fires when the document view (window) has been resized
window.addEventListener("resize", (e) => {
    console.clear();
    console.log("------Event Resize------");
    console.log(window.innerWidth);
    console.log(window.innerHeight);
    console.log(window.outerWidth);
    console.log(window.outerHeight);
    console.log(e);
});

//  SCROLL EVENT
window.addEventListener("scroll", (e) => {
    console.clear();
    console.log("------Event Scroll------");
    // ScrollX: Returns the number of pixels that the document has been horizontally scrolled.
    console.log("ScrollX", window.scrollX);
    // ScrollY:Returns the number of pixels that have been displaced in the document by vertical scroll.
    console.log("ScrollY", window.scrollY);
    console.log(e);
});

// LOAD EVENT:The load event is fired when the whole page has loaded, including all dependent resources such as stylesheets and images.
window.addEventListener("load", (e) => {
    console.log("------LOAD EVENT------");
    // The screenX property returns the horizontal coordinate (according to the users computer screen) of the mouse pointer when an event was triggered.
    console.log(window.screenX);
    console.log(window.screenY);
    console.log(e);
});

// The DOMContentLoaded event fires when the initial HTML document has been completely loaded and parsed, without waiting for stylesheets, images, and subframes to finish loading. 
window.addEventListener("DOMContentLoaded", (e) => {
    console.log("------DOMContentLoaded event------");
    console.log(window.screenX);
    console.log(window.screenY);
    console.log(e);
});