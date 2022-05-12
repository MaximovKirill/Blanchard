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

// tabs
document.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('.categories__item-btn').forEach(function(tabsBtn) {
    tabsBtn.addEventListener('click', function(event) {
      const path = event.currentTarget.dataset.path;
      if (event.currentTarget.classList.contains('categories__item-btn_active')) {
        document.querySelectorAll('.categories__item-btn').forEach(function(stepBtn) {
          stepBtn.classList.remove('categories__item-btn_active')
        });
        document.querySelectorAll('.categories__dropdown').forEach(function(tabContent) {
          tabContent.classList.remove('categories__dropdown_active')
        });
      }
        else {
          document.querySelectorAll('.categories__item-btn').forEach(function(stepBtn) {
            stepBtn.classList.remove('categories__item-btn_active')
          });
          event.currentTarget.classList.add('categories__item-btn_active');
          document.querySelectorAll('.categories__dropdown').forEach(function(tabContent) {
            tabContent.classList.remove('categories__dropdown_active')
          });
          document.querySelector(`[data-target="${path}"]`).classList.add('categories__dropdown_active')
        }
    })
  })
});
