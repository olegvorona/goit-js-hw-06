const ingredients = [
'Potatoes',
'Mushrooms',
'Garlic',
'Tomatos',
'Herbs',
'Condiments',
];

  
const createIngredientsList = ingredients => ingredients.map(ingredient => {
  const ingredientsList = document.createElement('li');
  ingredientsList.textContent = ingredient;
  ingredientsList.classList.add('ingredient');
  return ingredientsList;
  
}
  
);

const ingredientsArr = document.getElementById(`ingredients`);
const ingredientsEl = createIngredientsList(ingredients);
ingredientsArr.append(...ingredientsEl);





