
const email= document.querySelector('input[type="email"]');

email.addEventListener('focus', (event) => {
  event.target.style.background = 'pink';
});

email.addEventListener('blur', (event) => {
  event.target.style.background = '';

  event.preventDefault() 
});