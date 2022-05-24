const inputEl = document.querySelector("#name-input");
const textNameEl = document.querySelector("#name-output");
inputEl.addEventListener("input", (event) => {
    if (event.target.value === "") {
        textNameEl.textContent = "Anonymous";
        return;
    }
    textNameEl.textContent = event.target.value;

});