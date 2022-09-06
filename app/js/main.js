
const body = document.querySelector('body'),
    html = document.querySelector('html'),
    menu = document.querySelectorAll('.header__burger, .header__nav, body'),
    burger = document.querySelector('.header__burger'),
    header = document.querySelector('.header');


let thisTarget;
body.addEventListener('click', function (event) {

    thisTarget = event.target;

    function $(arg) {
      return thisTarget.closest(arg);
    }

    // =-=-=-=-=-=-=-=-=-=- <Open/Close menu in header> -=-=-=-=-=-=-=-=-=-=-

    if (thisTarget.closest('.header__burger')) {
        menu.forEach(element => {
            element.classList.toggle('_active')
        })
    }

    // =-=-=-=-=-=-=-=-=-=- </Open/Close menu in header> -=-=-=-=-=-=-=-=-=-=-



    // =-=-=-=-=-=-=-=-=-=- <Drop-down list> -=-=-=-=-=-=-=-=-=-=-
    let headerDropDownTarget = $('.header__drop-down--target');
    if (headerDropDownTarget) {
      const parent = headerDropDownTarget.closest('.header__drop-down');
      parent.classList.toggle('_active');
    } else if(!$('.header__drop-down')) {
      document.querySelectorAll('.header__drop-down').forEach(headerDropDown => {
        headerDropDown.classList.remove('_active')
      })
    }

  // =-=-=-=-=-=-=-=-=-=- </Drop-down list> -=-=-=-=-=-=-=-=-=-=-

})

var instances = OverlayScrollbars(document.querySelectorAll('.custom-scrollbar'), { }); 



let resizeCheck = {}, windowSize;

function resizeCheckFunc(size, minWidth, maxWidth) {
  if (windowSize <= size && (resizeCheck[String(size)] == true || resizeCheck[String(size)] == undefined) && resizeCheck[String(size)] != false) {
    resizeCheck[String(size)] = false;
    maxWidth(); // < size
  }

  if (windowSize >= size && (resizeCheck[String(size)] == false || resizeCheck[String(size)] == undefined) && resizeCheck[String(size)] != true) {
    resizeCheck[String(size)] = true;
    minWidth(); // > size
  }
}

let stickyPlugin = new Sticky('.sticky');

function resize() {

  windowSize = window.innerWidth

  resizeCheckFunc(768,
    function () {  // screen > 768px

      stickyPlugin = new Sticky('.sticky');

  },
  function () {  // screen < 768px

    stickyPlugin.destroy()

  });

}

resize();

window.onresize = resize;

// =-=-=-=-=-=-=-=-=-=-=-=- <slider> -=-=-=-=-=-=-=-=-=-=-=-=
/*
let slider = new Swiper('.__slider', {
  
    spaceBetween: 30,
    slidesPerView: 1,
    centeredSlides: false,

    loop: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    breakpoints: {
      992: {
        slidesPerView: 3,
        centeredSlides: true,
    
      },
      600: {
        slidesPerView: 2,
        centeredSlides: false,
      },
    }
}); 
*/
let streamsSlider = new Swiper('.streams__slider', {
  
  spaceBetween: 30,
  slidesPerView: 1,
  direction: "vertical",

  //loop: true,
  pagination: {
    el: '.swiper-pagination#streams-pagination',
    clickable: true,
  },
  /* navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    992: {
      slidesPerView: 3,
      centeredSlides: true,
  
    },
    600: {
      slidesPerView: 2,
      centeredSlides: false,
    },
  } */
});

let ourPartnersSlider = new Swiper('.our-partners__slider', {
  
  spaceBetween: 0,
  slidesPerView: 1,
  loopAdditionalSlides: 3,

  loop: true,
  
  breakpoints: {
    992: {
      slidesPerView: 3,
    },
    768: {
      slidesPerView: 2,
    },
  }
});

// =-=-=-=-=-=-=-=-=-=-=-=- </slider> -=-=-=-=-=-=-=-=-=-=-=-=


/* 
// =-=-=-=-=-=-=-=-=-=-=-=- <Анимации> -=-=-=-=-=-=-=-=-=-=-=-=

wow = new WOW({
mobile:       false,
})
wow.init();

// =-=-=-=-=-=-=-=-=-=-=-=- </Анимации> -=-=-=-=-=-=-=-=-=-=-=-=

*/
