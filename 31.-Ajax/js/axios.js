// What is Axios?
// Axios is a promise-based HTTP Client for node.js and the browser. It is isomorphic (= it can run in the browser and nodejs with the same codebase). On the server-side it uses the native node.js http module, while on the client (browser) it uses XMLHttpRequests.

const d = document;

(() => {
    const $fragment = d.createDocumentFragment(),
        $axios = d.getElementById("axios");

    axios.get("https://jsonplaceholder.typicode.com/users")
        .then((res) => {
            console.log(res);
            let json = res.data;
            json.forEach(el => {
                const $li = d.createElement("li");
                $li.textContent = `Name: ${el.name} -- Email: ${el.email} -- Phone: ${el.phone}`;
                $fragment.appendChild($li);
            });
            $axios.appendChild($fragment);
        })
        .catch((err) => {
            console.log(err.response);
            let messege = err.response.statusText || "Error";
            $axios.innerHTML = `Error ${err.response.status}: ${messege}`;
        })
        .finally(() => console.log("This message will always be seen"));
})();