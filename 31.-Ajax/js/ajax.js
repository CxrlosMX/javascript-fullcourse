const d = document;
// Created a  anonimous function
(() => {
    // 1.-Created an instance of the object XMLHttpRequest
    const xhr = new XMLHttpRequest(),
        $xhr = d.getElementById("xhr"),
        $fragment = d.createDocumentFragment();
    // 2.- Create a event
    xhr.addEventListener("readystatechange", (e) => {
        // We create a conditional, the call back only will be executed if the condition is true
        if (xhr.readyState !== 4) return;

        console.log(xhr);
        // We neet to check the status
        if (xhr.status >= 200 && xhr.status <= 299) {

            console.log("Successful");
            // The response is in the format json, so we neet to become  js text
            console.log(xhr.responseText);
            // Saving the json and become to js
            let json = JSON.parse(xhr.responseText);
            console.log(json);



            // Adding the text to HTML
            json.forEach(el => {
                // Creting a dinamic element
                const $li = d.createElement("li");
                // Adding value in the element LI
                $li.innerHTML = `Name: ${el.name} -- Email: ${el.email} -- Phone: ${el.phone}`;
                // Adding the $li to the fragment
                $fragment.appendChild($li);
            });
            // And finally add the fragment with the elemento, to the HTML
            $xhr.appendChild($fragment);

        }
        else {
            console.log("Error");
            let messege=xhr.statusText || "An error occurred";
            $xhr.innerHTML=`Error ${xhr.status}: ${messege}`
        }


    });
    // 3.-We have to specify what is the method to create the request
    xhr.open("GET", "https://jsonplaceholder.typicode.com/users");

    //4.- Send the request
    xhr.send();
})();