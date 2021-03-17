const btn1 = document.querySelector('.multiply')
const btn2 = document.querySelector('.divide')
const span1 = document.querySelector('span:first-child')
const span2 = document.querySelector('span:last-child')

let score;

const adding = (a, b) => {
   score = a + b
   span1.textContent = score
   return score
}


const fnMultiply = () => {
   score *= 2
   span2.textContent = score
}

const fnDivide = () => {
   score /= 2
   span2.textContent = score
}



adding(7, 6)

btn1.addEventListener('click', fnMultiply)
btn2.addEventListener('click', fnDivide)


