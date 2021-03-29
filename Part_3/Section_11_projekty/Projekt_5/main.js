const nav = document.querySelector('nav')
const burger = document.querySelector('.burger');
const burgerIco = document.querySelector('.fa-bars');
const closeIco = document.querySelector('.fa-times');

burger.addEventListener('click', ()=>{
   nav.classList.toggle('active')
   burger.classList.toggle('active')
   if(burger.classList.contains('active')){
      burgerIco.classList.add('hide')
      closeIco.classList.remove('hide')
   } else{
      burgerIco.classList.remove('hide')
      closeIco.classList.add('hide')
   }
});

