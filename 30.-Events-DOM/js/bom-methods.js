// METHODS 
const $btnOpen = document.getElementById("open-window"),
    $btnClose = document.getElementById("close-window"),
    $btnPrint = document.getElementById("print-window");
let win;
$btnOpen.addEventListener("click", (e) => {
    // The open() method opens a new browser window, or a new tab, depending on your browser settings and the parameter values.
    win = window.open("https://github.com/CxrlosMX");
});
$btnClose.addEventListener("click", (e) => {
    //  To close your current window using JS, do this. 
    win.close();
});
$btnPrint.addEventListener("click", (e) => {
    // The print() method prints the contents of the current window. The print() method opens the Print Dialog Box,
    window.print();
});