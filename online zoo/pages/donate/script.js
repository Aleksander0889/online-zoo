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

// Pick'n'Feed

const circles = document.querySelectorAll(".feed-friend__bar-circle");
const amountInput = document.querySelector(".amount-input");
const defaultAmount = 100;

amountInput.value = 100;

circles.forEach((circle) => {
  circle.addEventListener("click", (event) => {
    circles.forEach((circle) => {
      circle.classList.remove("feed-friend__bar-circle_selected");
    });
    circle.classList.add("feed-friend__bar-circle_selected");
    const amount = circle.getAttribute("data-amount");
    amountInput.value = amount;
  });
});

amountInput.addEventListener("input", () => {
  amountInput.value = amountInput.value.substring(0, 4);
  circles.forEach((circle) => {
    if (circle.getAttribute("data-amount") === amountInput.value) {
      circles.forEach((circle) => {
        circle.classList.remove("feed-friend__bar-circle_selected");
      });
      circle.classList.add("feed-friend__bar-circle_selected");
    }
    if (circle.getAttribute("data-amount") !== amountInput.value) {
      circle.classList.remove("feed-friend__bar-circle_selected");
    }
  });
});