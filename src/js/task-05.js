const nameInput = document.querySelector('#name-input');
console.log(nameInput);
const nameOutinput = document.querySelector('#name-output');
console.log(nameOutinput);
    nameInput.addEventListener('input', () => {
    const name = nameInput.value.trim();
    nameOutinput.textContent = name || 'Anonymous';
  });