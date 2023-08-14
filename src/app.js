import convertASTToString from "./modules/convertASTToString";

const inputMessage = document.querySelector('.input');
const outputMessage = document.querySelector('.output');

inputMessage.addEventListener('input', showMessage);

function showMessage(e) {
  if (e.target.value === '') {
    outputMessage.textContent = '';
    return 0;
  }
  const encodedMessage = convertASTToString(e.target.value);
  outputMessage.textContent = encodedMessage;
}