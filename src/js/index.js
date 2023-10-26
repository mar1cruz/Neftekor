const connectBtn = document.querySelector(".input__button");
const inputs = document.querySelectorAll("input");

connectBtn.addEventListener("click", () => {
  inputs.forEach((input) => {
    input.value = "";
  });
});
