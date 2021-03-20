const btnUp = document.querySelector('.sizeUp')
const btnDown = document.querySelector('.sizeDown')
const btnColor = document.querySelector('.color')
const p = document.querySelector('p')

let fs = 36


const increase = () => {
   fs += 2
   p.style.fontSize = fs + 'px'
}

const decrease = () => {
   fs -= 2
   p.style.fontSize = fs + 'px'
}

const colorChanger = () => {
   // const col = Math.floor(Math.random()*16777215).toString(16);
   // p.style.color = '#' + col

   const r = Math.floor(Math.random() * 255)
   const g = Math.floor(Math.random() * 255)
   const b = Math.floor(Math.random() * 255)
   p.style.color = `rgb(${r},${g},${b})`
}

btnUp.addEventListener('click', increase)
btnDown.addEventListener('click', decrease)
btnColor.addEventListener('click', colorChanger)