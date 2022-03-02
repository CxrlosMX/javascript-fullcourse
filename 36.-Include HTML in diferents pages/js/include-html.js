const doc = document;
doc.addEventListener("DOMContentLoaded", (e) => {

    const includeHTML = (el, url) => {
        const xhr = new XMLHttpRequest();
        xhr.addEventListener("readystatechange", (e) => {
            if (xhr.readyState !== 4) return;
            if (xhr.status >= 200 && xhr.status < 300) {
                // The outerHTML property sets or returns the HTML element, including attributes, start tag, and end tag.
                el.outerHTML = xhr.responseText;
            }
            else {
                let messege = xhr.statusText || `Error loading page`;
                el.outerHTML = `<div><p>Error ${xhr.status}: ${messege}</p></div>`;
            }

        });
        xhr.open("GET", url);
        xhr.setRequestHeader("Content-type", "text/html; charset=utf-8");
        xhr.send();
    }
    // we get the attributes with the "data-include"
    d.querySelectorAll("[data-include]").forEach(el => includeHTML(el, el.getAttribute("data-include")));

});