const result = document.querySelector('#result');
const calculadora = document.querySelector('#calculadora');
const equal = document.querySelector('#equal');
const clear = document.querySelector('#clear');


calculadora.addEventListener('click', e => e.target.classList.contains('calculadora__button') ? result.value = result.value.concat(e.target.innerText) : null );

equal.addEventListener('click', () => result.value = eval(result.value));

clear.addEventListener('click', () => result.value = '')
