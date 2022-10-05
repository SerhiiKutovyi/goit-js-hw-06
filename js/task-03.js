const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const newImagesEl = document.querySelector('.gallery');
console.log(newImagesEl);

const newImg = images
  .map(image => `<li> <img src=${image.url} alt=${image.alt} width='320' height='250' /> </li>`)
  .join('');
console.log(newImg);

newImagesEl.insertAdjacentHTML('afterbegin', newImg);

// const newImg = images.map(image => {
//   // console.log(image);
//   const tempImg = document.createElement('img');

//   tempImg.src = image.url;
//   tempImg.alt = image.alt;
//   // console.log(tempImg);
//   const liEl = document.createElement('li');

//   liEl.appendChild(tempImg);
//   console.log(liEl);
//   return liEl;
// });
// console.log(newImg.join(''));
// newImagesEl.appendChild(...newImg);
// newImagesEl.insertAdjacentHTML('afterbegin', newImg);
