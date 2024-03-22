'use strict';

const number = document.querySelector('.number');
const fahrenheit = document.getElementById('fahrenheit');
const celcius = document.getElementById('celcius');
const outputP = document.querySelector('.output p');
const output = document.querySelector('.output');
const formula = document.querySelector('.formula p');
const calculate = document.querySelector('.calculate');
const lightMode = document.querySelector('button');
const body = document.querySelector('body');
const box = document.querySelector('section');
const button = document.querySelector('button');
const toggle = document.querySelector('.lightdark-circle');
const sun = document.querySelector('.fa-sun');
const moon = document.querySelector('.fa-moon');


function isNumber(str) {
  let input = str.trim()
  if(input.length > 0 && !isNaN(input)) return true;
  return false
}

function convert(temp) {
  if (isNumber(temp)) {
    if (celcius.checked) {
      let result = (temp - 32) * 5 / 9;
      let final = result.toFixed(2)
      output.innerText = `${temp}°F = ${final}°C`;
      formula.innerText = `Formula: (${temp}°F - 31) × 5/9 = ${final}°F`
    } else if (fahrenheit.checked) {
      let result = (temp * 9 / 5) + 32;
      let final = result.toFixed(2)
      output.innerText = `${temp}°C = ${final}°F`;
      formula.innerText = `Formula: (${temp}°C × 9/5) + 32 = ${final}°F`
    }  else if (!celcius.checked && !fahrenheit.checked) {
      output.innerText = 'Please select a temperature'
    }

  } else {
    output.innerText = 'please enter a vaild number'
  }
}
  calculate.addEventListener('click', function() {
    let temp = number.value.trim();
    convert(temp)
    if (!celcius.checked && !fahrenheit.checked) {
      output.innerText = 'Please select a temperature'
    }
});


lightMode.addEventListener('click', function() {
  body.classList.toggle("light-mode");
  box.classList.toggle("light-mode");
  outputP.classList.toggle("light-mode");
  output.classList.toggle("light-mode");
  formula.classList.toggle("light-mode");
  number.classList.toggle("light-mode");
  button.classList.toggle("light-mode");
  toggle.classList.toggle("light-mode");
  sun.classList.toggle("light-mode");
  moon.classList.toggle("light-mode");
});