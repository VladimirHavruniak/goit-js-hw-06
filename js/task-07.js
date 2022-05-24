const inputEl = document.querySelector("#font-size-control");
const textFontEl = document.querySelector("#text");
inputEl.addEventListener("input", (event) => {
    textFontEl.style.fontSize = `${event.target.value}px`;
}
);