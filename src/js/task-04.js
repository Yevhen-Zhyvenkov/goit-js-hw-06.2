let counterValue = 0;
const valueSpan = document.querySelector("#value");
const decrementButton = document.querySelector("[data-action=decrement]");
const incrementButton = document.querySelector("[data-action=increment]");

decrementButton.addEventListener("click", decrement);
  function decrement() {
counterValue = counterValue - 1;
valueSpan.textContent = counterValue;
}
  
incrementButton.addEventListener("click", increment);
  function increment() {
counterValue = counterValue + 1;
valueSpan.textContent = counterValue;
}

  
  







