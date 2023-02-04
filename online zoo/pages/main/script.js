/* burger*/
const burgerItem = document.querySelector('.burger');
const menu = document.querySelector('.burger-nav');
const menuCloseItem = document.querySelector('.header-nav-close');
burgerItem.addEventListener('click', () => {
  menu.classList.add('header-burger-active');
});
menuCloseItem.addEventListener('click', () =>{
  menu.classList.remove('header-burger-active');
});

/* burger*/

/*range*/
const inpRange = document.querySelector('input[type="range');
const rangeValue = function(){
  const newValue = elem.value;
  const target = document.querySelector('.testimonials-cards');
  target.innerHTML = newValue;
}

elem.addEventListener('input', rangeValue);

/*range*/