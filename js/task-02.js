const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const ingredientListEl = document.querySelector("#ingredients");
const allIngredientsEl =ingredients.map((el) => {
  const ingredientEl = document.createElement("li");
  ingredientEl.textContent = el;
  return ingredientEl;
});
ingredientListEl.append(...allIngredientsEl);
