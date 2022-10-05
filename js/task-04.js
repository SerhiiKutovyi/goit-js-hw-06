const decrementRef = document.querySelector('[data-action="decrement"]');
console.log(decrementRef);

const incrementRef = document.querySelector('[data-action="increment"]');
console.log(incrementRef);

const valuerRef = document.querySelector('#value');
console.log(valuerRef);

let counterValue = 0;

decrementRef.addEventListener('click', () => {
  counterValue -= 1;
  valuerRef.textContent = counterValue;
});

incrementRef.addEventListener('click', () => {
  counterValue += 1;
  valuerRef.textContent = counterValue;
});
