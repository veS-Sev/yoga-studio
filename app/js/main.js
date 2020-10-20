$(function () {

  var mySwiper = new Swiper('.swiper-container', {
    slidesPerView: 4,
    spaceBetween: 30,
     freeMode: true,

    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    },

  });

  var swiper = new Swiper('.aboutUS__feedback-swiper', {
    slidesPerView: 1,
    effect: 'fade',
    freeMode: true,
    // spaceBetween: 30,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  });

});