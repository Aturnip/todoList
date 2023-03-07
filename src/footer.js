const body = document.querySelector("body");
const footer = document.createElement("div");

footer.textContent = "By Aturnip 2023"

function addFooter() {
    footer.classList.add("footer");
    body.appendChild(footer);
}

export {addFooter}