const countChildrenOfCategories = document.querySelector("#categories");
const countCategiries = countChildrenOfCategories.children.length;
const massiveCategories = countChildrenOfCategories.children;
console.log(`Number of categories: ${countCategiries}`);
const result = function () {
    [...massiveCategories].map((el) => {
        console.log(`Category:${el.querySelector("h2").textContent}
Elements:${[...el.querySelectorAll("li")].length}`);
    });
}
result();