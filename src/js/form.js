const form = document.querySelector('.contact-us__form');
const nameInput = document.querySelector('.contact-us__input--name');
const emailInput = document.querySelector('.contact-us__input--email');
const textarea = document.querySelector('.contact-us__textarea');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  nameInput.value = '';
  emailInput.value = '';
  textarea.value = '';
})
