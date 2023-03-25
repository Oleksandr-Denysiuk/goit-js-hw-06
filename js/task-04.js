let counterValue = 0;
const counterElement = document.querySelector("#value");
const decrementBtn = document.querySelector('[data-action="decrement"]');
const incrementBtn = document.querySelector('[data-action="increment"]');

const onClickDecrementBtn = () => {
  counterValue -= 1;
  counterElement.textContent = counterValue;
};

const onClickIncrementBtn = () => {
  counterValue += 1;
  counterElement.textContent = counterValue;
};

decrementBtn.addEventListener("click", onClickDecrementBtn);
incrementBtn.addEventListener("click", onClickIncrementBtn);
