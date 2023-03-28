const inputEl = document.querySelector('#validation-input');
const dataLength = inputEl.dataset.length;
const inputLength = inputEl.value.length;

inputEl.addEventListener('blur', onBlur);
function onBlur() {
    if (inputEl.value.length < dataLength || inputEl.value.length > dataLength) {
        inputEl.classList.add('invalid');
    }
    else {
        inputEl.classList.remove('invalid');
        inputEl.classList.add('valid');
    }
}
