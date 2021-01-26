const appendNumber = 1;

const swiper = new Swiper('.swiper-container', {
  slidesPerView: 4,
  spaceBetween: 30,
  slidesPerGroup: 1,
  loop: false,
  loopFillGroupWithBlank: false,
  pagination: {
    el: '.swiper-pagination',
    clickable: false,
    dynamicBullets: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    // when window width is >= 480px
    730: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    // when window width is >= 640px
    1080: {
      slidesPerView: 3,
      spaceBetween: 40,
    },
    1430: {
      slidesPerView: 4,
      spaceBetween: 40,
    },
  },
});
