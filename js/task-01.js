const numberOfCategoriesEl = document.querySelectorAll("li.item");
console.log(`Number of categories: ${numberOfCategoriesEl.length}`);

const toShowCategoriesEl = [...numberOfCategoriesEl]
.map((categories) => console.log(`Category: ${categories.firstElementChild.textContent}

Elements: ${categories.children[1].children.length} `)
).join('/n');
