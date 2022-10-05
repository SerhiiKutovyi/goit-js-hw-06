const refInput = document.querySelector('#validation-input');
console.log(refInput);
// console.log(refInput.value.length);

const returnRefInput = () => {
  if (refInput.value.length === Number(refInput.dataset.length)) {
    refInput.classList.remove('invalid');
    refInput.classList.add('valid');
  } else {
    refInput.classList.remove('valid');
    refInput.classList.add('invalid');
  }
};
refInput.addEventListener('blur', returnRefInput);
