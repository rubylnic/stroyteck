'use strict';
(function() {

  let initializeGallery = function() {
    let galleries = document.querySelectorAll('.lightgallery');
    for (let i = 0; i < galleries.length; i++) {
      lightGallery(galleries[i], {
        thumbnail: true,
        share: false,
        download: false,
      })
    }
  }

  setTimeout(initializeGallery, 0);

})();
//lazyload

  setTimeout(function() {
    lozad('.lazyload').observe();
    },0);


'use strict';
(function() {
  let yMap;
  const mapElement = document.querySelector('[data-map]');
  if (mapElement) {
      yMap = new YmapsInitializer(mapElement);
  }})();

'use strict';
(function () {
  let tel = document.querySelector('.tel');
  if (tel) {
    var phoneMask = IMask(
      document.querySelector('.tel'), {
      mask: '+{7}(000)000-00-00'
    });
  }
})();

'use strict';
(function() {
  var openBtn = document.querySelector('.header__burger');
  var closeBtn = document.querySelector('.header__close');
  var nav = document.querySelector('.nav');

  var openMenu = function(evt) {
    evt.preventDefault();
    nav.classList.remove('nav--hidden');
    nav.classList.add('nav--show');
    openBtn.classList.add('header__burger--closed');
    closeBtn.classList.remove('header__close--closed');
  };

  var closeMenu = function(evt) {
    evt.preventDefault();
    nav.classList.add('nav--hidden');
    nav.classList.remove('nav--show');
    openBtn.classList.remove('header__burger--closed');
    closeBtn.classList.add('header__close--closed');
  };

  openBtn.addEventListener('click', openMenu);
  closeBtn.addEventListener('click', closeMenu);
})();
'use strict';
(function () {


  var swiper = new Swiper('.types__slider', {
    slidesPerView: 1,
    loop: true,
    // init: false,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },

    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
      600: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      900: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
      1370: {
        slidesPerView: 4,
        spaceBetween: 23,
      },
    }
  });

  var mainSwiper = new Swiper('.main-slider.swiper-container', {
    slidesPerView: 1,
    loop: true,
    // init: false,

    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  });

  var reviewsSwiper = new Swiper('.reviews .swiper-container', {
    slidesPerView: 1,
    loop: true,
    // init: false,

    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
      470: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      600: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
      900: {
        slidesPerView: 4,
        spaceBetween: 20,
      },
      1370: {
        slidesPerView: 5,
        spaceBetween: 23,
      },
    }
  });

  var workSwiper = new Swiper('.work .swiper-container', {
    slidesPerView: 1,
    loop: true,
    // init: false,

    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
      600: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      900: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
      1370: {
        slidesPerView: 4,
        spaceBetween: 23,
      },
    }
  });

})();
