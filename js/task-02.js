const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const ingredientEl = document.createElement("li");
ingredientEl.textContent = "";
const ingredientListEl = document.querySelector("#ingredients");
ingredients.forEach((el) => {
  const ingredientEl = document.createElement("li");
    ingredientEl.textContent = el;
    ingredientListEl.append(ingredientEl);
});