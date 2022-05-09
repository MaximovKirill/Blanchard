// swiper
const swiper = new Swiper('.swiper', {
  allowTouchMove: false,
  loop: true,
  effect: 'fade',
  speed: 10000,
  autoplay: {
    delay: 10000,
  },
});

// // burger-menu
// window.addEventListener('DOMContentLoaded', function() {
//   document.querySelector('#header__burger').addEventListener('click', function() {
//     document.querySelector('#header__nav-adaptive').classList.add('active');
//   });
//   document.querySelector('#nav-adaptive__close').addEventListener('click', function() {
//     document.querySelector('#header__nav-adaptive').classList.remove('active');
//   });
//   document.querySelectorAll('.header__link-adaptive').forEach(function(t) {
//     t.addEventListener('click', function(event) {
//       document.querySelector('#header__nav-adaptive').classList.remove('active');
//     });
//   });
// });

