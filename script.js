const buttons = document.querySelectorAll('span')
const inputResult = document.querySelector('.result p')

let hiddenString = '';

for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener('click', handleEvent);
}

function handleEvent() {
  const content = this.textContent

  if (content === '=') {
    calculateResult()
  } else if (content === 'AC') {
    clearInput()
  } else {
    appendToInput(content)
  }
}

function calculateResult() {
  let calculatedResult = eval(hiddenString).toFixed(4);
  clearInput()
  appendToInputResult(calculatedResult);
  hiddenString = calculatedResult.toString();
}

function clearInput() {
  inputResult.innerHTML = '';
  hiddenString = '';
}

function appendToInput(value) {
  if(validationNextEvent(value)) { return }

  appendToInputResult(value)
  hiddenString += (value === '÷' || value === 'x') ? replaceSymbol(value) : value
}

function validationNextEvent(value) {
  return hiddenString !== '' && isNaN(hiddenString[hiddenString.length-1]) && isNaN(value)
}

function replaceSymbol(content) {
  return content === '÷' ? '/' : '*';
}

function appendToInputResult(char) {
  inputResult.append(char);
}
