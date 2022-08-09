document.addEventListener('DOMContentLoaded', function() {

  //top-wrapper-swiper
  const topWrapperSwiper = new Swiper('.top-wrapper__swiper', {
    allowTouchMove: false,
    loop: true,
    effect: 'fade',
    speed: 10000,
    autoplay: {
      delay: 10000,
    },
  });

  //galery-swiper
  const galerySwiper = new Swiper('.galery__swiper', {
    slidesPerView: 1,
      grid: {
        rows: 1,
        fill: 'row'
      },
      spaceBetween: 20,
      pagination: {
        el: '.galery__swiper-pagination',
        type: 'fraction'
      },
      navigation: {
        nextEl: '.galery__swiper-button_next',
        prevEl: '.galery__swiper-button_prev'
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
      //Управление стрелками влево/вправо
      a11y: false,
      keyboard: {
        enabled: true,
        onlyInViewport: true
      }, 
      //Слайды вне области видимости нефокусируемы
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

  //developments-swiper
  const developmentsSwiper = new Swiper('.developments__swiper', {
    slidesPerView: 1,
      grid: {
        rows: 1,
        fill: 'row'
      },
      spaceBetween: 20,
      navigation: {
        nextEl: '.developments__swiper-button_next',
        prevEl: '.developments__swiper-button_prev'
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
      //Управление стрелками влево/вправо
      a11y: false,
      keyboard: {
        enabled: true,
        onlyInViewport: true
      },
      //Слайды нефокусируемы, ссылки вне области видимости нефокусируемы
      watchSlidesProgress: true,
      watchSlidesVisibility: true,
      slideVisibleClass: 'slide-visible',
      on: {
        init: function () {
          this.slides.forEach((slide) => {
            slide.tabIndex = '-1';
            if (!slide.classList.contains('slide-visible')) {
              slide.querySelectorAll('.development__link').forEach(function(tabIndex) {
                tabIndex.tabIndex = '-1';
              });
            } else {
              slide.querySelectorAll('.development__link').forEach(function(tabIndex) {
                tabIndex.tabIndex = '';
              });
            };
          });
        },
        slideChange: function () {
          this.slides.forEach((slide) => {
            slide.tabIndex = '-1';
            if (!slide.classList.contains('slide-visible')) {
              slide.querySelectorAll('.development__link').forEach(function(tabIndex) {
                tabIndex.tabIndex = '-1';
              });
            } else {
              slide.querySelectorAll('.development__link').forEach(function(tabIndex) {
                tabIndex.tabIndex = '';
              });
            };
          });
        }
      }
  });

  //projects-swiper
  const projectsSwiper = new Swiper('.projects__swiper', {
    slidesPerView: 1,
    loop: true,
      grid: {
        rows: 1,
        fill: 'row'
      },
      spaceBetween: 50,
      navigation: {
        nextEl: '.projects__swiper-button_next',
        prevEl: '.projects__swiper-button_prev'
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
      //Управление стрелками влево/вправо
      a11y: false,
      keyboard: {
        enabled: true,
        onlyInViewport: true
      }, 
      //Слайды вне области видимости нефокусируемы
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

  //dropbox-tabs
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
          document.querySelector(`[data-target='${path}']`).classList.add('categories__dropdown_active');
        };
    });
  });

  //select
  const element = document.querySelector('#selectcustom');
  const choises = new Choices(element, {
    searchEnabled: false,
    itemSelectText: '',
    shouldSort: false
  });

  //checkbox
  document.querySelectorAll('.checkbox__input').forEach(function(check) {
    check.addEventListener('keydown', function(key) {
      if ((key.keyCode === 13) || (key.keyCode === 32)) {
        check.toggleAttribute('checked');
      };
    });
    check.addEventListener('click', function() {
      check.toggleAttribute('checked');
    }); 
  });

  //accordion
  new Accordion('.accordion', {
    openOnInit: [0]
  });

  //accordion-tabs
  document.querySelectorAll('.ac-list__link').forEach(function(tabsBtn) {
    tabsBtn.addEventListener('click', function(event) {
      const path = event.currentTarget.dataset.path;
      document.querySelectorAll('.ac-list__link').forEach(function(stepBtn) {
        stepBtn.classList.remove('ac-list__link_active')
      });
      event.currentTarget.classList.add('ac-list__link_active');
      document.querySelectorAll('.catalog__paper').forEach(function(tabContent) {
        tabContent.classList.remove('catalog__paper_active')
      });
      document.querySelector(`[data-target='${path}']`).classList.add('catalog__paper_active');
    })
  });

  //tooltips
  tippy('.projects__tooltip-btn', {
    maxWidth: 270,
    trigger: 'click',
    theme: 'violet'
  });

  //map
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
    //point
    var myPlacemark = new ymaps.Placemark([55.75846806898367,37.60108849999989], {}, {
      iconLayout: 'default#image',
      iconImageHref: 'img/contacts__map-point.svg',
      iconImageSize: [20, 20]
    });
    myMap.geoObjects.add(myPlacemark);
    //controls
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
    //zoom
    myMap.behaviors.disable('scrollZoom');
  };

  //simplebar
  document.querySelectorAll('.simplebar-content-wrapper').forEach(function(tabIndex) {
    tabIndex.setAttribute('tabindex', '-1');
  });

  //validation
  const validation = new JustValidate('#form-feedback', {
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
      },
      {
        rule: 'maxLength',
        value: 11,
        errorMessage: 'Телефон должен содержать менее 11 символов'
      },
    ])
    .onSuccess((event) => {
      console.log('Validation passes and form submitted', event);
    });

  //scroll
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

  //scroll-mobile
  const MOBILE_WIDTH = 580;
  function getWindowWidth () {
    return Math.max(
      document.body.scrollWidth,
      document.documentElement.scrollWidth,
      document.body.offsetWidth,
      document.documentElement.offsetWidth,
      document.body.clientWidth,
      document.documentElement.clientWidth
    );
  };
  function scrollToContent (link, isMobile) {
    if (isMobile && getWindowWidth() > MOBILE_WIDTH) {
      return;
    }
    const href = link.getAttribute('href').substring(1);
    const scrollTarget = document.getElementById(href);
    const elementPosition = scrollTarget.getBoundingClientRect().top;
    window.scrollBy({
        top: elementPosition,
        behavior: 'smooth'
    });
  };
  document.querySelectorAll('.js-scroll-link-mobile').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        scrollToContent(this, true);
    });
  });

  //modals
  const btns = document.querySelectorAll('.galery__slide');
  const modalOverlay = document.querySelector('.modal-overlay');
  const modals = document.querySelectorAll('.modal');
  const esc = document.querySelectorAll('.modal__esc');
  focusElements = [
    'a[href]',
    'input',
    'button',
    'select',
    'textaria',
    '[tabindex]'
  ];
  focusOffElements = [
    'div[class="top-wrapper"]',
    'main',
    'footer'
  ];
  //Открытие
  btns.forEach((el) => {
    el.addEventListener('click', (e) => {
      let path = e.currentTarget.getAttribute('data-path');
      modals.forEach((el) => {
        el.classList.remove('modal_visible');
      });
      document.querySelector(`[data-target="${path}"]`).classList.add('modal_visible');
      modalOverlay.classList.add('modal-overlay_visible');
      //Установка фокуса на кнопке модального окна
      const focusable = document.querySelector('.modal_visible').querySelectorAll(focusElements);
      function x() {
        if (focusable.length != 0) {
          focusable[0].focus();
        };
        esc.forEach((y) => {
          y.addEventListener('click', (e) => {
            el.focus();
          });
        });
        modalOverlay.addEventListener('click', (e) => {
          el.focus();
        });
      };
      setTimeout(x,100);
      //Отключение фокуса других элементов
      document.querySelectorAll(focusOffElements).forEach(focusOff => {
        focusOff.setAttribute('inert','');
      });
    });
  });
  //Закрытие
  function closeModal() {
    modalOverlay.classList.remove('modal-overlay_visible');
    modals.forEach((el) => {
      el.classList.remove('modal_visible');
    });
  };
  function focusOn() {
    document.querySelectorAll(focusOffElements).forEach(f => {
      f.removeAttribute('inert');
    });
  };
  modalOverlay.addEventListener('click', (e) => {
    if (e.target == modalOverlay) {
      closeModal();
      focusOn()
    };
  });
  esc.forEach((elem) => {
    elem.addEventListener('click', (e) => {
      if (e.target == elem) {
        closeModal();
        focusOn()
      };
    });
  });
  window.addEventListener('keydown', function(el) {
    if (el.keyCode === 27) {
      closeModal();
      focusOn()
    };
  });
});
