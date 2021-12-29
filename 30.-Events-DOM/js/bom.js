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

// EVENT SCROLL
window.addEventListener("scroll", (e) => {
    console.clear();
    console.log("------Event Scroll------");
    // ScrollX: Returns the number of pixels that the document has been horizontally scrolled.
    console.log("ScrollX",window.scrollX);
    // ScrollY:Returns the number of pixels that have been displaced in the document by vertical scroll.
    console.log("ScrollY",window.scrollY);

    console.log(e);
});