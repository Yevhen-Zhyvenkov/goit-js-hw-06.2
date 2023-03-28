const spanEl = document.querySelector('#text')
const fontSizeInput = document.querySelector('#font-size-control');
fontSizeInput.addEventListener('input', onInput);
function onInput(event) {
    console.log(event.currentTarget.valueAsNumber);
    spanEl.style.fontSize = `${fontSizeInput.value}px`;
}


