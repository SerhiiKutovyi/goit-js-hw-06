const refButton = document.querySelector('.change-color');

const refSpan = document.querySelector('.color');

refButton.addEventListener('click', getRandomHexColor);
function getRandomHexColor(event) {
  let randomColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  refSpan.style.backgroundColor = randomColor;
  refSpan.textContent = randomColor;
  document.body.style.backgroundColor = randomColor;
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
