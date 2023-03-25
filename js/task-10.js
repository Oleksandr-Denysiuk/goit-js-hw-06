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

const createBoxes = (amount) => {
  let defaultBoxSize = 30;
  console.log(amount);
  if (amount >= input.min && amount <= input.max) {
    for (let i = 0; i < amount; i += 1) {
      defaultBoxSize += 10 * i;
      // const boxElement = document.createElement("div");
      // boxElement.classList.add("item");
      // boxElement.style.cssText +=
      // "width: `${defaultBoxSize}`px; hight: `${defaultBoxSize}`px; backgroundColor: getRandomHexColor()";
      // display: Flex; flex-direction: row; justifyContent: center; align-items: center; gap: 5px ";
      // boxElement.style.width = `${defaultBoxSize}`;
      // boxElement.style.heigth = `${defaultBoxSize}`;
      const boxElement = `<div class="item" style = " width: ${defaultBoxSize}; heigth: ${defaultBoxSize}; backgroundColor: ${getRandomHexColor()};"></div>`;
      boxesArray.push(boxElement);
      console.log(boxesArray);
    }
  }
  boxes.insertAdjacentHTML("beforeend", boxesArray.join(""));
};

const destroyBoxes = () => {
  input.value = "";
  boxes.innerHTML = "";
};

createButton.addEventListener("click", () => {
  console.log("div#box");
  createBoxes(Number(input.value));
  // console.log(Number(input.value));
});
destroyButton.addEventListener("click", destroyBoxes);
// const formElements = event.currentTarget.elements;
