// top-wrapper-swiper
const topWrapperSwiper = new Swiper('.top-wrapper-swiper', {
  allowTouchMove: false,
  loop: true,
  effect: 'fade',
  speed: 10000,
  autoplay: {
    delay: 10000,
  },
});

// galery-swiper
const galerySwiper = new Swiper('.galery__swiper', {
  slidesPerView: 1,
    grid: {
      rows: 1,
      fill: 'row'
    },
    spaceBetween: 20,
    pagination: {
      el: '.swiper-pagination',
      type: 'fraction'
    },
    navigation: {
      nextEl: '.galery__swiper-button-next',
      prevEl: '.galery__swiper-button-prev'
    },

    breakpoints: {
      441: {
        slidesPerView: 2,
        spaceBetween: 30
      },

      1200: {
        slidesPerView: 3,
        spaceBetween: 50
      }
    },

    a11y: false,
    keyboard: {
      enabled: true,
      onlyInViewport: true
    }, // можно управлять с клавиатуры стрелками влево/вправо

    // Дальнейшие надстройки делают слайды вне области видимости не фокусируемыми
    watchSlidesProgress: true,
    watchSlidesVisibility: true,
    slideVisibleClass: 'slide-visible',

    on: {
      init: function () {
        this.slides.forEach((slide) => {
          if (!slide.classList.contains('slide-visible')) {
            slide.tabIndex = '-1';
          } else {
            slide.tabIndex = '';
          }
        });
      },
      slideChange: function () {
        this.slides.forEach((slide) => {
          if (!slide.classList.contains('slide-visible')) {
            slide.tabIndex = '-1';
          } else {
            slide.tabIndex = '';
          }
        });
      }
    }
});

// developments-swiper
const developmentsSwiper = new Swiper('.developments__swiper', {
  slidesPerView: 1,
    grid: {
      rows: 1,
      fill: 'row'
    },
    spaceBetween: 20,
    navigation: {
      nextEl: '.developments__swiper-button-next',
      prevEl: '.developments__swiper-button-prev'
    },

    breakpoints: {
      441: {
        slidesPerView: 2,
        spaceBetween: 30
      },

      1200: {
        slidesPerView: 3,
        spaceBetween: 50
      }
    },

    a11y: false,
    keyboard: {
      enabled: true,
      onlyInViewport: true
    }, // можно управлять с клавиатуры стрелками влево/вправо

    watchSlidesProgress: true,
    watchSlidesVisibility: true,
    slideVisibleClass: 'slide-visible',
    on: {
      init: function () {
        this.slides.forEach((slide) => {
          slide.tabIndex = '-1';
          if (!slide.classList.contains('slide-visible')) {
            slide.querySelectorAll('.development__link').forEach(function(x) {
              x.tabIndex = '-1';
            });
          } else {
            slide.querySelectorAll('.development__link').forEach(function(x) {
              x.tabIndex = '';
            });
          };
        });
      },
      slideChange: function () {
        this.slides.forEach((slide) => {
          slide.tabIndex = '-1';
          if (!slide.classList.contains('slide-visible')) {
            slide.querySelectorAll('.development__link').forEach(function(x) {
              x.tabIndex = '-1';
            });
          } else {
            slide.querySelectorAll('.development__link').forEach(function(x) {
              x.tabIndex = '';
            });
          };
        });
      }
    }
});

// projects-swiper
const projectsSwiper = new Swiper('.projects__swiper', {
  slidesPerView: 1,
  loop: true,
    grid: {
      rows: 1,
      fill: 'row'
    },
    spaceBetween: 50,
    navigation: {
      nextEl: '.projects__swiper-button-next',
      prevEl: '.projects__swiper-button-prev'
    },

    breakpoints: {
      441: {
        slidesPerView: 2,
        spaceBetween: 30
      },

      1200: {
        slidesPerView: 3,
        spaceBetween: 50
      }
    },

    a11y: false,
    keyboard: {
      enabled: true,
      onlyInViewport: true
    }, // можно управлять с клавиатуры стрелками влево/вправо

    // Дальнейшие надстройки делают слайды вне области видимости не фокусируемыми
    watchSlidesProgress: true,
    watchSlidesVisibility: true,
    slideVisibleClass: 'slide-visible',

    on: {
      init: function () {
        this.slides.forEach((slide) => {
          if (!slide.classList.contains('slide-visible')) {
            slide.tabIndex = '-1';
          } else {
            slide.tabIndex = '';
          }
        });
      },
      slideChange: function () {
        this.slides.forEach((slide) => {
          if (!slide.classList.contains('slide-visible')) {
            slide.tabIndex = '-1';
          } else {
            slide.tabIndex = '';
          }
        });
      }
    }
});


// dropbox-tabs
document.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('.categories__btn').forEach(function(tabsBtn) {
    tabsBtn.addEventListener('click', function(event) {
      const path = event.currentTarget.dataset.path;
      if (event.currentTarget.classList.contains('categories__btn_active')) {
        document.querySelectorAll('.categories__btn').forEach(function(stepBtn) {
          stepBtn.classList.remove('categories__btn_active')
        });
        document.querySelectorAll('.categories__dropdown').forEach(function(tabContent) {
          tabContent.classList.remove('categories__dropdown_active')
        });
      }
        else {
          document.querySelectorAll('.categories__btn').forEach(function(stepBtn) {
            stepBtn.classList.remove('categories__btn_active')
          });
          event.currentTarget.classList.add('categories__btn_active');
          document.querySelectorAll('.categories__dropdown').forEach(function(tabContent) {
            tabContent.classList.remove('categories__dropdown_active')
          });
          document.querySelector(`[data-target='${path}']`).classList.add('categories__dropdown_active')
        }
    })
  });
});

// scroll
document.querySelectorAll('.js-scroll-link').forEach(link => {
  link.addEventListener('click', function(e) {
      e.preventDefault();
      const href = this.getAttribute('href').substring(1);
      const scrollTarget = document.getElementById(href);
      const elementPosition = scrollTarget.getBoundingClientRect().top;
      window.scrollBy({
          top: elementPosition,
          behavior: 'smooth'
      });
  });
});

// select
const element = document.querySelector('#selectCustom');
const choises = new Choices(element, {
  searchEnabled: false,
  itemSelectText: '',
  shouldSort: false
});

//checkbox
document.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('.checkbox-item').forEach(function(check) {
    check.addEventListener('keydown', function(x) {
      if (x.keyCode === 13) {
        check.toggleAttribute('checked');
      }
    });  
  });
});

// accordion
new Accordion('.accordion-container', {
  openOnInit: [0]
});

// accordion-tabs
document.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('.answer-list__btn').forEach(function(tabsBtn) {
    tabsBtn.addEventListener('click', function(event) {
      const path = event.currentTarget.dataset.path;
      document.querySelectorAll('.answer-list__btn').forEach(function(stepBtn) {
        stepBtn.classList.remove('answer-list__btn--active')
      });
      event.currentTarget.classList.add('answer-list__btn--active');
      document.querySelectorAll('.catalog__paper').forEach(function(tabContent) {
        tabContent.classList.remove('catalog__paper--active')
      });
      document.querySelector(`[data-target='${path}']`).classList.add('catalog__paper--active')
    })
  })
});

// tooltips
tippy('.projects__tooltip-btn', {
  trigger: 'click'
});

// map
ymaps.ready(init);
function init(){
  var myMap = new ymaps.Map('map', {
    center: [55.75846806898367,37.60108849999989], 
    zoom: 14,
    controls: []
  },
  {
    suppressMapOpenBlock: true
  });
// point
  var myPlacemark = new ymaps.Placemark([55.75846806898367,37.60108849999989], {}, {
    iconLayout: 'default#image',
    iconImageHref: 'img/contacts-map-icon.svg',
    iconImageSize: [20, 20]
  });
  myMap.geoObjects.add(myPlacemark);
// controls
  myMap.controls.add('geolocationControl', {
    position: {
      top: 350,
      right: 10,
      left: 'auto',
  }
  });
  myMap.controls.add('zoomControl', {
    size: 'small',
    position: {
      top: 260,
      right: 10,
      left: 'auto',
  }
  });
// zoom
  myMap.behaviors.disable('scrollZoom');
};

//simplebar
document.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('.simplebar-content-wrapper').forEach(function(tabindexNone) {
    tabindexNone.setAttribute('tabindex', '-1');
  });
});

//validation and mask
const validation = new JustValidate('#form', {
  errorFieldCssClass: 'is-invalid',
  errorContainer: '.errors-container',
});
validation
  .addField('#name', [
    {
      rule: 'required',
      errorMessage: 'Введите Ваше имя'
    },
    {
      rule: 'minLength',
      value: 3,
      errorMessage: 'Имя должно содержать более 3 символов'
    },
    {
      rule: 'maxLength',
      value: 30,
      errorMessage: 'Имя должно содержать менее 30 символов'
    },
    {
      rule: 'customRegexp',
      value: /^[^\d\t\n\r\f\v~`!\@"#№$;%^:&?*()_+=|/\\{}[\].,<>]{1,50}$/,
      errorMessage: 'Недопустимый формат'
    }
  ])
  .addField('#tel', [
    {
      rule: 'required',
      errorMessage: 'Введите номер Вашего телефона'
    },
    {
      rule: 'number',
      errorMessage: 'Номер должен содержать только цифры'
    }
  ])