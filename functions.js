fetch("https://api.github.com/users/DamornTyde/repos")
.then(response => response.json())
.then(data => {
    data.forEach(item => {
        if (item.name != "damorntyde.github.io") {
            const temp = document.createDocumentFragment();
            const header = document.createElement("h2");
            const descr = document.createElement("p");
            header.appendChild(document.createTextNode(item.name));
            temp.appendChild(header);
            descr.appendChild(document.createTextNode(item.description));
            temp.appendChild(descr);
            temp.appendChild(createButton("code", () => window.open(`https://www.github.com/DamornTyde/${item.name}`)));
            temp.appendChild(createButton("showcase", () => window.open(`https://damorntyde.github.io/${item.name}`)));
            document.querySelector("main").appendChild(temp);
        }
    });
})
.catch(error => console.error(error));

function createButton(text, onClicked) {
    const button = document.createElement("button");
    button.appendChild(document.createTextNode(text));
    button.addEventListener("click", onClicked);
    return button;
}