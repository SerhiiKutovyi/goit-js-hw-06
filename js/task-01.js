const numberOfCategories = document.querySelectorAll('.item');
console.log(`Number of categories: ${numberOfCategories.length}`);

// const categoryTitleEl = document.querySelectorAll('h2');

// console.log('Category:', categoryTitleEl[0].textContent);
// console.log('Category:', categoryTitleEl[1].textContent);
// console.log('Category:', categoryTitleEl[2].textContent);

const amountOfElementsEl = document.querySelectorAll('.item');
amountOfElementsEl.forEach(element => {
  console.log('Category :', element.querySelector('h2').textContent);
  console.log(`Elements : ${element.querySelectorAll('li').length}`);
});
