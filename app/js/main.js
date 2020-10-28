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
    effect: 'fade',
    freeMode: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  });

  var swiper = new Swiper('.contact__maps-swiper', {
    slidesPerView: 1,
    effect: 'fade',
    // direction: 'vertical',
    freeMode: true,
    pagination: {
      el: '.contact__swiper-pagination',
      clickable: true,
    },
  });


  let target_block = $(".aboutUS__count-inner"); // Ищем блок 
  let blockStatus = true;
  console.log(target_block);
  // обычно использовалась $(window).scroll(function () {...}, но height:100%; не дает работать событию scroll, если убрать height:100%, то footer не прижимается к дну страницы при недостаточном наполнении других секций, min-height:100%; в этом деле не помогло - footer улетает, хотя scroll начинает работать. Поэтому использовала this.body
  $(this.body).scroll(function () {

    let scrollEvent = ($(window).scrollTop() > (target_block.position().top - $(window).height()));

    if (scrollEvent && blockStatus) {

      blockStatus = false; // Запрещаем повторное выполнение функции до следующей перезагрузки страницы.

      $('.aboutUS__count-number').each(function () {
        $(this).prop('Counter', 0).animate({
          Counter: $(this).text()
        }, {
          duration: 5000,
          easing: 'swing',
          step: function (now) {
            $(this).text(Math.ceil(now));
          }
        });
      });

    }
  });





});