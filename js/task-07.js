const inputElement = document.getElementById("font-size-control");
console.dir(inputElement);
const textElement = document.getElementById("text");

const fontSizeControl = ({ currentTarget }) => {
  textElement.style.fontSize = `${currentTarget.value}.px`;
};

inputElement.addEventListener("input", fontSizeControl);
