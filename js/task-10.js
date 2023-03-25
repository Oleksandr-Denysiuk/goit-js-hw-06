function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const input = document.querySelector('[type = "number"]');
const createButton = document.querySelector("button[data-create]");
const destroyButton = document.querySelector("button[data-destroy]");
const boxes = document.querySelector("#boxes");
const boxesArray = [];
console.log(boxes);

const createBoxes = (amount) => {
  let defaultBoxSize = 20;
  console.log(amount);
  if (amount >= input.min && amount <= input.max) {
    for (let i = 0; i < amount; i += 1) {
      defaultBoxSize += 10;
      const boxElement = document.createElement("div");

      boxElement.style.width = `${defaultBoxSize}px`;
      boxElement.style.height = `${defaultBoxSize}px`;
      boxElement.style.backgroundColor = getRandomHexColor();

      boxesArray.push(boxElement);
      console.log(boxesArray);
      boxes.append(...boxesArray);
      console.log(boxes);
    }
  } else {
    alert("Enter a number from 1 to 100!");
  }
};

const destroyBoxes = () => {
  input.value = "";
  boxes.innerHTML = "";
};

createButton.addEventListener("click", () => {
  createBoxes(Number(input.value));
});

destroyButton.addEventListener("click", destroyBoxes);
