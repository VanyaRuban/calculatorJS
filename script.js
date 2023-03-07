const buttons = document.querySelectorAll('span')
const inputResult = document.querySelector('.result p')
let stringForCalculation;

for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener('click', append);
}

function append() {
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
  // debugger
  const stringCalcul = stringForCalculation.replace(/[^-()\d/*+.]/g, '')
  clearInput()
  inputResult.append(eval(stringCalcul))
}

function clearInput() {
  inputResult.innerHTML = '';
  stringForCalculation = '';
}

function appendToInput(content) {
  inputResult.append(content)
  let cnt;
  if (content === '÷' || content === 'x') {
    cnt = replaceSymbol(content)
  } else {
    cnt = content
  }
  stringForCalculation += cnt
}

function replaceSymbol(content) {
  if (content === '÷') {
    return '/'
  } else {
    return '*'
  }
}
