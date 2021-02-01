const sizeUp = document.querySelector('.size-up')
const sizeDown = document.querySelector('.size-down')
const color = document.querySelector('.color')
const p = document.querySelector('p')

let fs = 20

sizeUp.addEventListener('click', () => {
   fs += 5
   p.style.fontSize = fs + 'px'
})
   
sizeDown.addEventListener('click', () => {
   fs -= 5
   p.style.fontSize = fs + 'px'
})

color.addEventListener('click', () => {
   p.style.color = 'gold'
})