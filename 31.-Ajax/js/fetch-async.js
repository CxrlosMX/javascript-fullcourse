const d = document;

(() => {
    const $fetchAsyn = d.getElementById("fetch-async"),
        $fragment = d.createDocumentFragment();

    async function getData() {
        try {
            let res = await fetch("https://jsonplaceholder.typicode.com/users"),
                json = await res.json();

            if (!res.ok) throw { status: res.status, statusText: res.statusText };
            console.log(json);

            json.forEach((el) => {
                const $li = d.createElement("li");
                $li.innerHTML = `Name: ${el.name} -- Email: ${el.email} -- Phone: ${el.phone}`;
                $fragment.appendChild($li);
            });
            $fetchAsyn.appendChild($fragment);
        } catch (error) {
            console.log(error);
            let messege = error.statusText || "Error";
            $fetchAsyn.innerHTML = `Error ${error.status}: ${messege}`;
        } finally {
            console.log("This message will always be seen");
        }

    }
    getData();
})();