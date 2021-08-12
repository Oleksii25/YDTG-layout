const toggler = document.querySelector('.nav__toggler');
const menu = document.querySelector('.nav__list');

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

