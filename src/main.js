const body = document.querySelector("body")
const main = document.createElement("div");
const navBar = document.createElement("div");
const content = document.createElement("div");
const button = document.createElement("button");

function addMain() {;
    main.classList.add("main");
    body.appendChild(main);
    navBar.classList.add("navBar");
    main.appendChild(navBar);
    content.classList.add("content");
    main.appendChild(content);
    button.textContent = "Add a tile";
    navBar.appendChild(button);
}

function addTile() {
    const tile = document.createElement("div");
    content.appendChild(tile);
    tile.classList.add("tile");
}

button.addEventListener("click", () => {
    addTile();
});


export {addMain, addTile}