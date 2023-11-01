const connectBtn = document.querySelector(".input__button");
const inputs = document.querySelectorAll("input");
const menu__icon = document.querySelector(".menu__icon");
const nav = document.querySelector(".header__nav");
const body = document.querySelector("body");
const cookiePopup = document.getElementById("cookie-popup");
const acceptButton = document.getElementById("cookie-accept");
const checkbox = document.querySelector("#checkbox");

let isChecked = false;

connectBtn.addEventListener("click", (e) => {
  e.preventDefault();

  let allFieldsFilled = true;

  inputs.forEach((input) => {
    if (!input.value) {
      allFieldsFilled = false;
    }
  });

  if (allFieldsFilled && isChecked) {
    window.location.href = "../../gratitude.html";
  }
});

menu__icon.addEventListener("click", () => {
  nav.classList.toggle("active");
  menu__icon.classList.toggle("active");
  body.classList.toggle("_lock");
});

checkbox.addEventListener("change", (e) => {
  isChecked = true;
});

function hideCookiePopup() {
  cookiePopup.style.display = "none";
  localStorage.setItem("cookieAccepted", "true");
}

if (!localStorage.getItem("cookieAccepted")) {
  cookiePopup.classList.add("show");
}

acceptButton.addEventListener("click", hideCookiePopup);
