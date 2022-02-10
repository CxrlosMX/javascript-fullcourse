const d = document,
    $table = d.querySelector(".crud-table"),
    $form = d.querySelector(".crud-form"),
    $title = d.querySelector(".crud-title"),
    $template = d.getElementById("crud-template").content,
    $fragment = d.createDocumentFragment();

const ajax = (options) => {
    let { url, method, success, error, data } = options;
    const xhr = new XMLHttpRequest();
    xhr.addEventListener("readystatechange", (e) => {
        if (xhr.readyState !== 4) return;

        if (xhr.status >= 200 && xhr.status < 300) {
            let json = JSON.parse(xhr.responseText);
            // Method
            success(json);
        } else {
            let message = xhr.statusText || "There's been a problem";
            error(`Error ${xhr.status}: ${message}`);
        }

    });


    xhr.open(method || "GET", url);
    xhr.setRequestHeader("Content-type", "application/json; charset=utf-8");
    // When sending data to a web server, the data has to be a string.Convert a JavaScript object into a string with JSON.stringify()
    xhr.send(JSON.stringify(data));
}

const getAll = () => {
    ajax({
        method: "GET",
        url: "http://localhost:3000/santos",
        success: (res) => {
            console.log(res);
            res.forEach(el => {
                $template.querySelector(".name").textContent = el.nombre;
                $template.querySelector(".power").textContent = el.constelacion;
                $template.querySelector(".edit").dataset.id = el.id;
                $template.querySelector(".edit").dataset.name = el.nombre;
                $template.querySelector(".edit").dataset.constellation = el.constelacion;
                $template.querySelector(".delete").dataset.id = el.id;
                let $clone = d.importNode($template, true);
                $fragment.appendChild($clone);
            });
            $table.querySelector("tbody").appendChild($fragment);
        },
        error: (err) => {
            console.error(err);
            $table.insertAdjacentHTML("afterend", `<p><b>${err}</b></p>`);
        },
        data: null
    })
}


d.addEventListener("DOMContentLoaded", getAll);
d.addEventListener("submit", (e) => {
    if (e.target === $form) {
        e.preventDefault();
    }
    if (!e.target.id.value) {
        // Create-POST
        ajax({
            url: "http://localhost:3000/santos",
            method: "POST",
            success: (res) => location.reload(),
            error: (err) => $form.insertAdjacentHTML("afterend", `<p><b>${err}</b></p>`),
            data: {
                nombre: e.target.name.value,
                constelacion: e.target.power.value
            }
        });
    }
    else {
        // Update-PUT
        ajax({
            url: `http://localhost:3000/santos/${e.target.id.value}`,
            method: "PUT",
            success: (res) => location.reload(),
            error: (err) => $form.insertAdjacentHTML("afterend", `<p><b>${err}</b></p>`),
            data: {
                nombre: e.target.name.value,
                constelacion: e.target.power.value
            }
        });
    }

});

d.addEventListener("click", e => {
    if (e.target.matches(".edit")) {
        alert("You pressed the button Edit");
        $title.textContent = "Editant";
        $form.name.value = e.target.dataset.name;
        $form.power.value = e.target.dataset.constellation;
        $form.id.value = e.target.dataset.id;

    }
    if (e.target.matches(".delete")) {
        let isDelete = confirm("Are you sure you want to delete?");
        if (isDelete) {
            ajax({
                url: `http://localhost:3000/santos/${e.target.dataset.id}`,
                method: "DELETE",
                success: (res) => location.reload(),
                error: (err) => alert(err),
            });
        }
    }
});