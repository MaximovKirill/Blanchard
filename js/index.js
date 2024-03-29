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
        768: {
          slidesPerView: 2,
          spaceBetween: 33
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
      pagination: {
        el: '.developments__swiper-pagination',
        type: 'bullets',
        clickable: 'true'
      },
      breakpoints: {
        568: {
          slidesPerView: 2,
          slidesPerGroup: 2,
          spaceBetween: 34
        },
        993: {
          slidesPerView: 3,
          slidesPerGroup: 3,
          spaceBetween: 27
        },
        1025: {
          slidesPerView: 3,
          slidesPerGroup: 1
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
    // loop: true,
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
        568: {
          slidesPerView: 2,
          spaceBetween: 35
        },
        769: {
          slidesPerView: 2,
          spaceBetween: 50
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
          stepBtn.classList.remove('categories__btn_active');
          stepBtn.setAttribute('aria-expanded','false');
        });
        document.querySelectorAll('.categories__dropdown').forEach(function(tabContent) {
          tabContent.classList.remove('categories__dropdown_active');
        });
      } else {
          document.querySelectorAll('.categories__btn').forEach(function(stepBtn) {
            stepBtn.classList.remove('categories__btn_active');
            stepBtn.setAttribute('aria-expanded','false');
          });
          event.currentTarget.classList.add('categories__btn_active');
          event.currentTarget.setAttribute('aria-expanded','true');
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
    shouldSort: false,
    allowHTML: true
  });

  //checkbox
  document.querySelectorAll('.checkbox__input').forEach(function(check) {
    check.addEventListener('keydown', function(kk) {
      if (kk.keyCode === 13) {
        check.classList.toggle('checked');
      };
    });
    check.addEventListener('click', function() {
      check.classList.toggle('checked');
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
    myMap.behaviors.disable('scrollZoom');
    var geolocationControl = new ymaps.control.GeolocationControl({
      options: {
        position: {
          top: 350,
          right: 10,
          left: 'auto',
        }
      }
    });
    myMap.controls.add(geolocationControl);
    var zoomControl = new ymaps.control.ZoomControl({
      options: {
        size: 'small',
        position: {
          top: 260,
          right: 10,
          left: 'auto',
        }
      }
    });
    myMap.controls.add(zoomControl);
    if (getWindowWidth() < 1025) {
      geolocationControl.options.set('visible', false);
      zoomControl.options.set('visible', false);
    } else {
      geolocationControl.options.set('visible', true);
      zoomControl.options.set('visible', true);
    };
    window.addEventListener('resize', function(el) {
      if (getWindowWidth() < 1025) {
        geolocationControl.options.set('visible', false);
        zoomControl.options.set('visible', false);
      } else {
        geolocationControl.options.set('visible', true);
        zoomControl.options.set('visible', true);
      };
    });
  };

  // simplebar
  function simpleBarZ () {
    document.querySelectorAll('.simplebar-content-wrapper').forEach(function(tabIndex) {
      tabIndex.setAttribute('tabindex', '-1');
    }); 
  };
  if (window.matchMedia('(max-width: 1300px)').matches) {
    new SimpleBar(document.querySelector('.header__nav-scroll'));
    simpleBarZ();
  };
  window.addEventListener('resize', function() {
    if (window.matchMedia('(max-width: 1300px)').matches) {
      new SimpleBar(document.querySelector('.header__nav-scroll'));
      simpleBarZ();
    };
  });

  //mask
  var selector = document.querySelector("input[type='tel']");
  var im = new Inputmask("+7(999)999-99-99");
  im.mask(selector);

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
        errorMessage: 'Введите более 3 символов'
      },
      {
        rule: 'maxLength',
        value: 30,
        errorMessage: 'Введите менее 30 символов'
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
        validator: (value) => {
        const phone = selector.inputmask.unmaskedvalue();
        return Number(phone) && phone.length === 10;
        },
        errorMessage: 'Неверный формат телефона'
      }
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
  const MOBILE_WIDTH = 768;
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
  const modalSimplebarWrap = document.querySelector('.modal-overlay .simplebar-content-wrapper');
  const modalSimplebarCont = document.querySelector('.modal-overlay .simplebar-content');
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
      document.body.style.overflow = 'hidden';
      //Для скролла при маленькой высоте экрана
      if (document.documentElement.clientHeight < document.querySelector('.modal_visible').clientHeight) {
        document.querySelector('.modal-overlay .simplebar-content-wrapper').style = "align-items: stretch";
      };
      window.addEventListener('resize', function(elem) {
        if (document.documentElement.clientHeight < document.querySelector('.modal_visible').clientHeight) {
          document.querySelector('.modal-overlay .simplebar-content-wrapper').style = "align-items: stretch";
        } else {
          document.querySelector('.modal-overlay .simplebar-content-wrapper').style = "align-items: center";
        };
      });
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
        modalSimplebarWrap.addEventListener('click', (e) => {
          el.focus();
        });
        modalSimplebarCont.addEventListener('click', (e) => {
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
    document.body.style.overflow = 'auto';
  };
  function focusOn() {
    document.querySelectorAll(focusOffElements).forEach(f => {
      f.removeAttribute('inert');
    });
  };
  modalSimplebarWrap.addEventListener('click', (e) => {
    if (e.target == modalSimplebarWrap) {
      closeModal();
      focusOn()
    };
  });
  modalSimplebarCont.addEventListener('click', (e) => {
    if (e.target == modalSimplebarCont) {
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

//adaptive
//burger
function setBurger(params) {
  const btn = document.querySelector(`.${params.btnClass}`);
  const menu = document.querySelector(`.${params.menuClass}`);
  const links = document.querySelectorAll(`.${params.menuLinks}`);
  focusOffElem = [
    '.header__logo',
    '.header__btn-search',
    '.header__item_categories',
    '.hero',
    'main',
    'footer'
  ];
  btn.setAttribute('aria-expanded', false);
  menu.addEventListener('animationend', function () {
    if (this.classList.contains(params.hiddenClass)) {
      this.classList.remove(params.activeClass);
      this.classList.remove(params.hiddenClass);
    };
  });
  btn.addEventListener('click', function () {
    this.classList.toggle(params.activeClass);
    document.querySelector('.header__login').classList.toggle('link-focus');
    if (
      !menu.classList.contains(params.activeClass) &&
      !menu.classList.contains(params.hiddenClass)
    ) {
      menu.classList.add(params.activeClass);
      this.setAttribute('aria-expanded', true);
      document.querySelectorAll(focusOffElem).forEach(focusOff => {
        focusOff.setAttribute('inert','');
      });
      document.body.style.overflow = 'hidden';
    } else {
      menu.classList.add(params.hiddenClass);
      document.body.removeAttribute('style');
      this.setAttribute('aria-expanded', false);
      document.querySelectorAll(focusOffElem).forEach(f => {
        f.removeAttribute('inert');
      });
    };
  });
  if (!menu.classList.contains(params.activeClass)) {
    links.forEach((link) => {
      link.addEventListener('click', () => {
        btn.classList.toggle(params.activeClass);
        menu.classList.add(params.hiddenClass);
        document.body.removeAttribute('style');
        btn.setAttribute('aria-expanded', false);
        document.querySelectorAll(focusOffElem).forEach(f => {
          f.removeAttribute('inert');
        });
      });
    });
  };
};
setBurger({
  btnClass: "header__burger", // класс бургера
  menuClass: "header__nav-wrapper", // класс меню
  activeClass: "is-opened", // класс открытого состояния
  hiddenClass: "is-closed", // класс закрывающегося состояния (удаляется сразу после закрытия)
  menuLinks: "js-links" // класс ссылок в меню
});

//search
function setSearch(params) {
  const openBtn = document.querySelector(`.${params.openBtnClass}`);
  const search = document.querySelector(`.${params.searchClass}`);
  const closeBtn = document.querySelector(`.${params.closeBtnClass}`);
  const searchInput = document.querySelector(`.${params.searchInputClass}`);

  search.addEventListener("animationend", function (evt) {
    if (this._isOpened) {
      this.classList.remove(params.activeClass);
      this.classList.remove(params.hiddenClass);
      this._isOpened = false;
    } else {
      this._isOpened = true;
    };
  });

  search.addEventListener('click', function(evt) {
    evt._isSearch = true;
  });

  openBtn.addEventListener("click", function (evt) {
    document.querySelector('.header__btn-search').setAttribute('inert','');
    if (
      !search.classList.contains(params.activeClass) &&
      !search.classList.contains(params.hiddenClass)
    ) {
      search.classList.add(params.activeClass);
    };
    searchInput.focus();
  });

  closeBtn.addEventListener('click', function () {
    document.querySelector('.header__btn-search').removeAttribute('inert');
    search.classList.add(params.hiddenClass);
    openBtn.focus();
  });

  document.body.addEventListener('click', function (evt) {
    if (!evt._isSearch && search._isOpened) {
      document.querySelector('.header__btn-search').removeAttribute('inert');
      search.classList.add(params.hiddenClass);
    };
  });
};
setSearch({
  openBtnClass: "header__btn-search", // класс кнопки открытия
  closeBtnClass: "header__close-search", // класс кнопки закрытия
  searchClass: "header__search-adaptive", // класс формы поиска
  activeClass: "is-opened", // класс открытого состояния
  hiddenClass: "is-closed", // класс закрывающегося состояния (удаляется сразу после закрытия)
  searchInputClass: "search__input" // класс поля поиска
});
