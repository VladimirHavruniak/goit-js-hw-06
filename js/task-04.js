const minusButtonEl = document.querySelector("button[data-action='decrement']");
const plusButtonEl = document.querySelector("button[data-action='increment']");
const counterEl = document.querySelector("#value");
let count = Number(counterEl.textContent);
plusButtonEl.addEventListener("click", () => {
  count += 1;
  counterEl.textContent = count;
});
minusButtonEl.addEventListener("click", () => {
  count -= 1;
  counterEl.textContent = count;
});