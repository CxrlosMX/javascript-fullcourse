const d = document;

(() => {

    const $fetch = d.getElementById("fetch"),
        $fragment = d.createDocumentFragment();
    // The global fetch() method starts the process of fetching a resource from the network, returning a promise which is fulfilled once the response is available. 
    fetch("https://jsonplaceholder.typicode.com/users").then((res) => {
        console.log(res);
        // To convert the response to a format JSON
        return res.ok ? res.json() : Promise.reject(res);
    }).then((json) => {
        console.log(json);
        json.forEach((el) => {
            const $li = d.createElement("li");
            $li.innerHTML = `Name: ${el.name} -- Email: ${el.email} -- Phone: ${el.phone}`;
            $fragment.appendChild($li);
        });
        $fetch.appendChild($fragment);
    }).catch((error) => {
        console.log(error);
        let messege = error.statusText || "Error";
        $fetch.innerHTML = `Error ${error.status}: ${messege}`;
    }).finally(() => {
        console.log("This message will always be seen");
    });
})();