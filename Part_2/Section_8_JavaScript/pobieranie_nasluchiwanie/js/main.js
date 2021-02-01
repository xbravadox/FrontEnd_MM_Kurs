// POBIERANIE ELEMENTÓW
// const btn = document.getElementsByTagName('button')
// console.log(btn)

// const p = document.getElementsByClassName('description')
// console.log(p)

// const heading = document.getElementById('title')
// console.log(heading)



// const item = document.querySelector('li')
// console.log(item)

// const items = document.querySelectorAll('li')
// console.log(items)

// const test = document.querySelector('#title')
// console.log(test)


// NASŁUCHIWANIE NA ZDARZENIA

const btn1 = document.querySelector('#btn1')
const btn2 = document.querySelector('.btn2')


function handleClik(e) {
   console.log('btn1')
}


btn1.addEventListener('click', handleClik)


btn2.addEventListener('click', () => {
   console.log('btn2')
})