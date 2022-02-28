const d = document,
    $table = d.querySelector(".crud-table"),
    $form = d.querySelector(".crud-form"),
    $title = d.querySelector(".crud-title"),
    $template = d.getElementById("crud-template").content,
    $fragment = d.createDocumentFragment();

const getAll = async () => {
    try {
        let res = await axios.get("http://localhost:3000/santos"),
            json = await res.data;
        json.forEach(el => {
            $template.querySelector(".name").textContent = el.nombre;
            $template.querySelector(".power".textContent = el.constelacion);
            $template.querySelector(".edit").dataset.id = el.id;
            $template.querySelector(".edit").dataset.name = el.nombre;
            $template.querySelector(".edit").dataset.power = el.constelacion;
            $template.querySelector(".delete").dataset.id = el.id;

            let $clone = d.importNode($template, true);

            $fragment.appendChild($clone);

        });
        $table.querySelector("tbody").appendChild($fragment);
    } catch (err) {
        let message = err.statusTex || "There's been a problem";
        $table.insertAdjacentHTML("afterend", `<p><b>Error ${err.status}:${message}</b></p>`);

    }
}

d.addEventListener("DOMContentLoaded", getAll);
d.addEventListener("submit", async e => {
    if (e.target === $form) {
        e.preventDefault();

        if (!e.target.id.value) {
            //Create--POST
            try {
                let options = {
                    method: "POST",
                    header: {
                        "Content-type": "application/json; charset=utf-8"
                    },
                    data: JSON.stringify({
                        nombre: e.target.name.value,
                        constelacion: e.target.power.value
                    })
                },
                    res = await axios("http://localhost:3000/santos", options),
                    json = await res.data;
                location.reload();
            } catch (err) {
                let message = err.statusText || "There's been a problem";
                $form.insertAdjacentHTML("afterend", `<p><b>Error ${err.status}:${message}</b></p>`);

            }
        }
        else {
            //Update--PUT
            try {
                let options = {
                    method: "PUT",
                    header: {
                        "Content-type": "application/json; charset=utf-8"
                    },
                    data: JSON.stringify({
                        nombre: e.target.name.value,
                        constelacion: e.target.power.value
                    })
                },
                    res = await axios(`http://localhost:3000/santos/${e.target.id.value}`, options),
                    json = await res.data;
                location.reload();
            } catch (err) {
                let message = err.statusText || "There's been a problem";
                $form.insertAdjacentHTML("afterend", `<p><b>Error ${err.status}:${message}</b></p>`);

            }
        }

    }
});

d.addEventListener("click", async e => {
    if (e.target.matches(".edit")) {
        $title.textContent = "Editing Santos";

        $form.name.value = e.target.dataset.name;
        $form.power.value = e.target.dataset.constellation;
        $form.id.value = e.target.dataset.id;
    }
    if (e.target.matches(".delete")) {
        let isDelete = confirm("Are you sure you want to delete?");
        if (isDelete) {
            try {
                let options = {
                    method: "DELETE",
                    header: {
                        "Content-type": "application/json; charset=utf-8"
                    }
                    
                },
                    res = await axios(`http://localhost:3000/santos/${e.target.dataset.id}`, options),
                    json = await res.data;
                location.reload();
            } catch (err) {
                let message = err.statusText || "There's been a problem";
                $form.insertAdjacentHTML("afterend", `<p><b>Error ${err.status}:${message}</b></p>`);

            }
        }
    }
});