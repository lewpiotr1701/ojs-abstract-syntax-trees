import convertASTToString from "./modules/convertASTToString";

const inputMessage = document.querySelector('.input');
const outputMessage = document.querySelector('.output');
const button = document.querySelector('#button')

inputMessage.addEventListener('input', (e) => {
  if (e.currentTarget.value === '') {
    outputMessage.classList.add('output-visibility')
  }
})
button.addEventListener('click', showMessage);


function showMessage(e) {
  const textareaValue = inputMessage.value
  if (!textareaValue) return;

  const convertedString = convertASTToString(textareaValue);
  outputMessage.classList.remove('output-visibility')
  outputMessage.textContent = convertedString;
}