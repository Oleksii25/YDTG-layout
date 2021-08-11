const toggler = document.querySelector('.nav__toggler');
const menu = document.querySelector('.nav__list');
const form = document.querySelector('.contact-us__form');
const nameInput = document.querySelector('.contact-us__input--name');
const emailInput = document.querySelector('.contact-us__input--email');
const text = document.querySelector('.contact-us__textarea');
const test = document.querySelector('.test');


toggler.addEventListener('click', (event) => {
  if(event.target.className === 'nav__toggler') {
    console.log('event')
    toggler.classList.add('nav__toggler--checked');
    toggler.classList.remove('nav__toggler');
    menu.style.display = 'block';
  } else {
    toggler.classList.remove('nav__toggler--checked');
    toggler.classList.add('nav__toggler');
    menu.style.display = 'none';
  }
});

form.addEventListener('submit', (event) => {
  event.preventDefault();
  nameInput.value = '';
  emailInput.value = '';
  text.value = '';
} )


$(document).ready(function(){
  $('.spirit__slider').slick({
    autoplay: true,
  });
})

