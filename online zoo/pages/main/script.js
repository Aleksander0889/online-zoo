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

// Slider on Pets Section

const leftButton = document.querySelector(".button-slide-left");
const rightButton = document.querySelector(".button-slide-right");
const petsSliderTrack = document.querySelector(".pets-wrapper");

//  Array-helper for shuffling items
const numArray = ["1", "2", "3", "4", "5", "6"];

// Function-helper for shuffling array
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

const moveLeft = () => {
  petsSliderTrack.classList.add("slider__move-left");
  leftButton.removeEventListener("click", moveLeft);
  rightButton.removeEventListener("click", moveRight);
};

const moveRight = () => {
  petsSliderTrack.classList.add("slider__move-right");
  rightButton.removeEventListener("click", moveRight);
  leftButton.removeEventListener("click", moveLeft);
};

leftButton.addEventListener("click", moveLeft);

rightButton.addEventListener("click", moveRight);

petsSliderTrack.addEventListener("animationend", (animationevent) => {
  if (animationevent.animationName === "slider-move-left") {
    petsSliderTrack.classList.remove("slider__move-left");

    let leftItems = document.querySelector("#slider-group-left");
    let leftItemsHtml = leftItems.innerHTML;

    shuffleArray(numArray);

    for (let i = 0; i < leftItems.children.length; i++) {
      leftItems.children[i].style.order = numArray[i];
    }
    document.querySelector("#slider-group-active").innerHTML = leftItemsHtml;
  } else {
    petsSliderTrack.classList.remove("slider__move-right");

    let rightItems = document.querySelector("#slider-group-right");
    let rightItemsHtml = rightItems.innerHTML;

    shuffleArray(numArray);

    for (let i = 0; i < rightItems.children.length; i++) {
      rightItems.children[i].style.order = numArray[i];
    }

    document.querySelector("#slider-group-active").innerHTML = rightItemsHtml;
  }

  leftButton.addEventListener("click", moveLeft);
  rightButton.addEventListener("click", moveRight);
});


/*range*/
const inpRange = document.querySelector('input[type="range');
const car = document.querySelector('.testimonials-cards')
const offsetCar = car.offsetWidth;
const cardWrap = document.querySelector('.testimonials-wrapper-block');
const getMargin = window.getComputedStyle(car, null).getPropertyValue("margin-right");
const cards = document.querySelectorAll('.testimonials-cards')
const margin = +getMargin.slice(0, -2)

console.log(getMargin);
const rangeValue = function(){
  const newValue = inpRange.value;
  cards.forEach( item => 
    item.classList.remove('testimonials-active')
);
  cards[newValue].classList.add('testimonials-active');

  const offSetcar = newValue * (offsetCar + margin);
    cardWrap.scrollLeft = offSetcar;
  
};

inpRange.addEventListener('input', rangeValue);
/*range*/