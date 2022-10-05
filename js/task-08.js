// const form = document.querySelector('.login-form');

// form.addEventListener('submit', onFormSubmit);

// function onFormSubmit(event) {
//   event.preventDefault();
//   if (event.target.email.value === '' || event.target.password.value === '') {
//     return alert('Дорогий користувач, заповни будь-ласка всі поля !');
//   } else {
//     let userDataObject = {
//       Email: event.target.email.value,
//       Password: event.target.password.value,
//     };
//     console.log(userDataObject);
//     event.target.reset();
//   }
// }

// const getEl = selector => document.querySelector(selector);
// const form = getEl('.login-form');

// form.addEventListener('submit', event => {
//   event.preventDefault();

//   const {
//     elements: { email, password },
//   } = form;    event,target.
//   if (email.value === '' || password.value === '') {
//     return alert('Всі поля повинні бути заповнені');
//   }
//   const result = {};
//   result.email = email.value;
//   result.password = password.value;
//   console.log(result);

//   event.target.reset();
// });

const form = document.querySelector('.login-form');
console.log(form);

form.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();
  console.dir(event.currentTarget);
}
