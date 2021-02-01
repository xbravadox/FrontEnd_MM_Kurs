const btn = document.querySelector('.arrow')
const img = document.querySelector('.item1')
const arrow = document.querySelector('.icon')

function showImage() {
   img.classList.toggle('show')

   if (img.classList.contains('show')) {
      arrow.style.transform = "rotate(180deg)"
   } else {
      arrow.style.transform = "rotate(0)"
   }
}

btn.addEventListener('click', showImage)