const btnRed = document.querySelector('#btn1')
const btnBlue = document.querySelector('.btn2')
const btnRemove = document.querySelector('.remove-color')
const div = document.querySelector('.color')


function redColor() {
   div.classList.remove('blue')
   // div.classList.add('red')
   div.classList.toggle('red')

}

function blueColor() {
   div.classList.remove('red')
   // div.classList.add('blue')
   div.classList.toggle('blue')
}

function removeColor() {
   div.classList.remove('red', 'blue')
}

btnRed.addEventListener('click', redColor)
btnBlue.addEventListener('click', blueColor)
btnRemove.addEventListener('click', removeColor)