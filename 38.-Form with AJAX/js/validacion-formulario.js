const d = document,
    w = window,
    n = navigator,
    ua = n.userAgent;

export default function contactFormValidations() {
    // 1.-Capturamos el formulario
    const $form = d.querySelector(".contact-form"),
        $inputs = d.querySelectorAll(".contact-form [required]"); /*Capturamos todos los inputs que tengan dentro de su interior el atributo "required"*/
    console.log($inputs);

    // Por cada input requerido agregaremos un span
    $inputs.forEach((el) => {
        // Creamos dinamicamente un elemento HTML
        const $span = d.createElement("span");
        // Asignamos como id del span el id del input
        $span.id = el.name;
        // Agregamos el mensaje que se mostrara en el span, recordemos que tenemos un texto en nuestros inputs de tipo title
        $span.textContent = el.title;

        // Le agregamos una clase a nuestro span para darle un mejor aspecto visual
        $span.classList.add("contact-form-error", "none");

        // Agregamos el elemento a nuestro elemento input
        el.insertAdjacentElement("afterend", $span);
    });

    d.addEventListener("keyup", (e) => {

        if (e.target.matches(".contact-form [required]")) {
            let $input = e.target,
                pattern = $input.pattern || $input.dataset.pattern;
            // console.log($input, pattern);
            // Creamos dos decisiones, las cuales validan si nuestros inputs tienen el atributo pattern
            if (pattern && $input.value !== "") {
                console.log("El input tiene patron");
                let regex = new RegExp(pattern);
                return !regex.exec($input.value) ? d.getElementById($input.name).classList.add("is-active") : d.getElementById($input.name).classList.remove("is-active");
            }
            if (!pattern) {
                return $input.value === "" ? d.getElementById($input.name).classList.add("is-active") : d.getElementById($input.name).classList.remove("is-active");
            }
        }
    });

    // Simulación de envio de correo 
    d.addEventListener("submit", (e) => {
        //  e.preventDefault();
        alert("Sending Formulario");

        // Almacenamos el loader y la referencia de envio
        const $loader = d.querySelector(".contact-form-loader"),
            $response = d.querySelector(".contact-form-response");

        $loader.classList.remove("none");

        // // Simulamos el envio de nuestro formulario, con un settimeout
        // setTimeout((e) => {
        //     $loader.classList.add("none");
        //     $response.classList.remove("none");
        //     // Y reseteamos el formulario
        //     $form.reset();
        //     // Agregamos otro settimeout para que se quite el mensaje despues de cierto tiempo
        //     setTimeout(() => {
        //         $response.classList.add("none");
        //     }, 2000);
        // }, 2000);


        fetch("https://formsubmit.co/ajax/luiscrendon131@gmail.com", {
            method: "POST",
            body: new FormData(e.target)
        })
            .then(res => res.ok ? res.json() : Promise.reject(res))
            .then(json => {
                console.log(json);
                $loader.classList.add("none");
                $response.classList.remove("none");
                $response.innerHTML = `<p>${json.message}</p>`
                $form.reset();
            })
            .catch(err => {
                console.log(err);
                let messege = err.statusText || "There's been a problem";
                $response.innerHTML = `<p>Error: ${err.status}: ${messege}</p>`
            })
            .finally(() => {
                setTimeout(() => {
                    $response.classList.add("none");
                    $response.innerHTML = "";
                }, 2000);
            })

    });
}