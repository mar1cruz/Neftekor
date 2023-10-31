const connectBtn = document.querySelector(".input__button");
const inputs = document.querySelectorAll("input");
const menu__icon = document.querySelector(".menu__icon");
const nav = document.querySelector(".header__nav");
const body = document.querySelector("body");

connectBtn.addEventListener("click", (e) => {
  e.preventDefault();
  
  let allFieldsFilled = true;

  inputs.forEach((input) => {
    if (!input.value) {
      allFieldsFilled = false;
    }
  });

  if (allFieldsFilled) {
    window.location.href = "../../gratitude.html";
  }
});

menu__icon.addEventListener("click", () => {
  nav.classList.toggle("active");
  menu__icon.classList.toggle("active");
  body.classList.toggle("_lock");
});
