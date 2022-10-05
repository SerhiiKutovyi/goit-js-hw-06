const form = document.querySelector('.login-form');

form.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();
  if (event.target.email.value === '' || event.target.password.value === '') {
    return alert('Будь ласка заповніть поля!');
  }
  const formElements = event.currentTarget.elements;
  const mail = formElements.email.value;
  const password = formElements.password.value;
  const formData = { mail, password };
  console.log(formData);
  event.target.reset();
}
