const converter = document.querySelector('#converter');
const result = document.querySelector('.result');
const btnConv = document.querySelector('.conv');
const btnReset = document.querySelector('.reset');
const btnChange = document.querySelector('.change');
const one = document.querySelector('.one');
const two = document.querySelector('.two');

let fahrenheit;
let celsius;

const swap = () => {
   if (one.innerText === '°C') {
      one.innerText = '°F';
      two.innerText = '°C';
      result.innerText = '';
   } else {
      one.innerText = '°C';
      two.innerText = '°F';
      result.innerText = '';
   }
};

const celToFahr = () => {
   fahrenheit = converter.value * 1.8 + 32;
   result.innerText = `${converter.value}°C to ${fahrenheit.toFixed(1)}°F`;
   converter.value = '';
};

const fahrToCel = () => {
   celsius = (converter.value - 32) / 1.8;
   result.innerText = `${converter.value}°F to ${celsius.toFixed(1)}°C`;
   converter.value = '';
};

const conversion = () => {
   if (converter.value !== '') {
      if (one.innerText === '°C') {
         celToFahr();
      } else {
         fahrToCel();
      }
   } else {
      result.innerText = 'Podaj poprawną temperaturę';
   };
};

const reset = () => {
   result.innerText = '';
   converter.value = '';
};

btnChange.addEventListener('click', swap);
btnConv.addEventListener('click', conversion);
btnReset.addEventListener('click', reset);