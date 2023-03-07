function addHeader() {
    const body = document.querySelector("body");
    const header = document.createElement("h1");
    header.textContent = "Welcome to my page!"
    body.appendChild(header);
}

export {addHeader};