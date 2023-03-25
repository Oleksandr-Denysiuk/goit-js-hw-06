const input = document.querySelector("#validation-input");
const inputLength = input.length;
console.log(input.dataset.length);
console.log(input.value.length);

const validationOfInput = (event) => {
  if (Number(input.value.length) === Number(input.dataset.length)) {
    input.classList.add("valid");
    input.classList.remove("invalid");
  } else {
    input.classList.add("invalid");
    input.classList.remove("valid");
  }
};
input.addEventListener("blur", validationOfInput);
