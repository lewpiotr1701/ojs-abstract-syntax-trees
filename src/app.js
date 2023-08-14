import convertASTToString from "./modules/convertASTToString";

const inputMessage = document.querySelector('.input');
const outputMessage = document.querySelector('.output');
const button = document.querySelector('#button')

inputMessage.value = ''

inputMessage.addEventListener('input', (e) => {
  if (e.currentTarget.value === '') {
    outputMessage.classList.add('output-visibility')
  }
})
button.addEventListener('click', showMessage);


function showMessage(e) {
  const textareaValue = inputMessage.value
  if (!textareaValue) return;

  outputMessage.classList.remove('output-visibility')

  try {
    const { ast: astObject } = JSON.parse(textareaValue)
    const htmlString = convertASTToString(astObject)
    outputMessage.textContent = htmlString
  } catch (err) {
    outputMessage.textContent = err.message;
  }
}