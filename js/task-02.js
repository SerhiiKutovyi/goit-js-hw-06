const ingredients = ['Potatoes', 'Mushrooms', 'Garlic', 'Tomatos', 'Herbs', 'Condiments'];

const ingredientsEL = document.querySelector('#ingredients');

ingredients.forEach(el => {
  const elementsEl = document.createElement('li');
  elementsEl.classList.add('item');
  elementsEl.textContent = el;
  console.log(elementsEl);
  ingredientsEL.appendChild(elementsEl);
});
console.log(ingredientsEL);
