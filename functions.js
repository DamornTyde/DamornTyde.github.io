fetch("https://api.github.com/users/DamornTyde/repos")
.then(response => response.json())
.then(data => {
    data.forEach(item => {
        if (item.name != "damorntyde.github.io") {
            const temp = document.createDocumentFragment();
            const header = document.createElement("h2");
            const descr = document.createElement("p");
            const buttons = document.createElement("div");
            header.appendChild(document.createTextNode(item.name));
            temp.appendChild(header);
            descr.appendChild(document.createTextNode(item.description));
            temp.appendChild(descr);
            buttons.appendChild(createButton("code", `https://www.github.com/DamornTyde/${item.name}`));
            buttons.appendChild(createButton("showcase", `https://damorntyde.github.io/${item.name}`));
            temp.appendChild(buttons);
            document.querySelector("main").appendChild(temp);
        }
    });
})
.catch(error => console.error(error));

function createButton(text, onClicked) {
    const button = document.createElement("button");
    button.appendChild(document.createTextNode(text));
    button.addEventListener("click", () => window.open(onClicked));
    return button;
}