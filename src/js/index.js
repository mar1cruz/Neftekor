const connectBtn = document.querySelector(".input__button");
const inputs = document.querySelectorAll("input");
const burgerMenu = document.querySelector(".burger__menu");
const header = document.querySelector(".header");
const body = document.querySelector("body");

connectBtn.addEventListener("click", () => {
  inputs.forEach((input) => {
    input.value = "";
  });
});

burgerMenu.addEventListener("click", () => {
  header.classList.toggle("active");
  body.classList.toggle("_lock");
});
