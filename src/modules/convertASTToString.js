function convertASTToString(input) {
  checkInput(input);
  return 'dupa'
}

function checkInput(input) {
  if (input === '') throw new Error('Input can not be empty');
  if (typeof input !== 'string') throw new Error('Input must be a string');
}

export default convertASTToString