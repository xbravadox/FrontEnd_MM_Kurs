const btn = document.querySelector('.menu')
const menu = document.querySelector('aside')

function showMenu(){
   console.log('ok');
   menu.classList.toggle('active')
   if (menu.classList.contains('active')){
      btn.style.left = "320px"
   }else{
      btn.style.left = "20px"
   }
}


btn.addEventListener('click', showMenu)
