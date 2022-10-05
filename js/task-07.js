// const fontSizeControl = document.querySelector('#font-size-control');
// console.log(fontSizeControl);
// const spanText = document.querySelector('#text');
// console.log(spanText);
// fontSizeControl.addEventListener('input', onInput);

// function onInput(event) {
//   console.log(event.target.value);
//   spanText.style.fontSize = event.target.value + 'px';
// }

const refInput = document.querySelector('#font-size-control');
console.log(refInput);
const spanText = document.querySelector('#text');
console.log(spanText);

refInput.addEventListener('input', onInputFocus);

function onInputFocus(event) {
  console.log(event.target.value);
  spanText.style.fontSize = event.target.value + 'px';
}
