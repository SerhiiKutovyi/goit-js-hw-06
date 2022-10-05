const refs = {
  input: document.querySelector('#name-input'),
  spanName: document.querySelector('#name-output'),
};

refs.input.addEventListener('input', onInputFocus);

function onInputFocus(event) {
  const returnOnInput = (refs.spanName.textContent = event.currentTarget.value);
  if (returnOnInput === '') {
    refs.spanName.textContent = 'Anonymous';
  }
}
console.log(refs.spanName);

// if (!returnOnInput) {
//   refs.spanName()
// }
