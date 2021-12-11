const $cards = document.querySelector(".cards"),
    $template = document.getElementById("template-card").content,
    $fragment = document.createDocumentFragment(),
    cardContent = [{
        title: "Tech",
        img: "https://placeimg.com/200/200/tech"
    },
    {
        title: "Animals",
        img: "https://placeimg.com/200/200/animals"
    },
    {
        title: "People",
        img: "https://placeimg.com/200/200/people"
    },
    {
        title: "Nature",
        img: "https://placeimg.com/200/200/nature"
    },
    {
        title: "Arch",
        img: "https://placeimg.com/200/200/arch"
    }

    ];

cardContent.forEach(el => {
    $template.querySelector("img").setAttribute("src", el.img);
    $template.querySelector("img").setAttribute("alt", el.title);
    $template.querySelector("figcaption").textContent = el.title;
    let $clone = document.importNode($template, true);
    $fragment.appendChild($clone);
});
// The importNode() method imports a node from another document.The imported node can be of all node types.If the second parameter is set to true, the nodes's child nodes (descendants) will also be imported.

$cards.appendChild($fragment);

document.body.appendChild($cards);
