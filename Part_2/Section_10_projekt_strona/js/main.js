document.addEventListener('DOMContentLoaded', () => {

   const nav = document.querySelector('.navbar')
   const hamburger = document.querySelector('.fa-bars')
   // dodaje cień na nawigacji
   function addShadow() {

      if (window.scrollY >= 100) {
         nav.classList.add('shadow-bg')
      } else {
         nav.classList.remove('shadow-bg')
      }
   }

   window.addEventListener('scroll', addShadow)

   // skrypt naprawiający nawigację (zamykanie na mobil)
   $(document).click(function (event) {
      var clickover = $(event.target)
      var _opened = $(".navbar-collapse").hasClass("show")
      if (_opened === true && !clickover.hasClass("navbar-toggler")) {
         $(".navbar-toggler").click()
      }
   })

   // slick.js
   $('.team-carousel').slick({
      // setting- name: setting - value
      autoplay: true,
      autoplaySpeed: 3500,
      slidesToShow: 4,
      slidesToScroll: 1
   })
  
})