const inputEl = document.querySelector("#validation-input");
inputEl.addEventListener("blur", (event) => {
    if (event.target.value.length===Number(event.target.dataset["length"])) {
        event.target.classList.add("valid");
        event.target.classList.replace("invalid","valid");
    }
    else {
        event.target.classList.replace("valid","invalid");
    }
    console.log(event.target.value.length);
    console.log(Number(event.target.dataset["length"]));
}
);