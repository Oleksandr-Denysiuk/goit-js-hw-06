function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const colorName = document.querySelector(".color");
const changeColorButton = document.querySelector(".change-color");
const body = document.body;

changeColorButton.addEventListener("click", () => {
  colorName.textContent = getRandomHexColor();
  body.style.backgroundColor = colorName.textContent;
});
