$(function () {

  var mySwiper = new Swiper('.swiper-container', {
    slidesPerView: 1,
    freeModeSticky: false,
    loop: true,

    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',

    },
    breakpoints: {
      580: {
        slidesPerView: 2,
      },
      761: {
        slidesPerView: 3,

      },
      1201: {
        slidesPerView: 4,
        spaceBetween: 30,
      },
    }
  });

  var swiper = new Swiper('.aboutus__feedback-swiper', {
    effect: 'fade',
    freeMode: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  });

  var swiper = new Swiper('.contact__maps-swiper', {
    slidesPerView: 1,
    loop: true,
    effect: 'fade',
    direction: 'horizontal',
    freeMode: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',

    },
    breakpoints: {
      1200: {
        direction: 'vertical',
        pagination: {
          el: '.contact__swiper-pagination',
          clickable: true,
        },

      },
    },
  });


  let target_block = $(".aboutus__count-inner"); // Ищем блок 
  let blockStatus = true;
  console.log(target_block);
  // обычно использовалась $(window).scroll(function () {...}, но height:100%; не дает работать событию scroll, если убрать height:100%, то footer не прижимается к дну страницы при недостаточном наполнении других секций, min-height:100%; в этом деле не помогло - footer улетает, хотя scroll начинает работать. Поэтому использовала this.body
  $(this.body).scroll(function () {

    let scrollEvent = ($(window).scrollTop() > (target_block.position().top - $(window).height()));

    if (scrollEvent && blockStatus) {

      blockStatus = false; // Запрещаем повторное выполнение функции до следующей перезагрузки страницы.

      $('.aboutus__count-number').each(function () {
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


  $(function () {
    if ($(window).width() < 500) {
      // Подключаем стиль для мобильных
      $("head").append($("<link rel='stylesheet' href='css/styleMob.css' type='text/css' media='screen' />"));
    } else {
      // Подключаем стиль для остальных
      $("head").append($("<link rel='stylesheet' href='css/style.css' type='text/css' media='screen' />"));
    }
  });


  let menuBtn = document.querySelector('.header__navigation-btn'),
    menuMenu = document.querySelector('.header__navigation'),
    header = document.querySelector('.header');

  menuBtn.addEventListener('click', function () {
    if (menuMenu.classList.contains('active')) {
      menuMenu.classList.remove('active');
      header.classList.remove('fill');
    } else {
      menuMenu.classList.add('active');
      header.classList.add('fill');
    }

    let mediaNav = document.querySelector('.header__navigation-list'),
      newNavItems = document.querySelectorAll('.header__navigation-item'),
      btnLogin = document.querySelector('.header__btn-login');

    if (newNavItems.length <= 5) {
      let newNavItem = document.createElement('li');
      newNavItem.classList.add('header__navigation-item');
      mediaNav.appendChild(newNavItem);
    } else {}

    let newLogin = document.querySelectorAll('.header__navigation-item')[5];
    newLogin.appendChild(btnLogin);

    btnLogin.style.display = "block";


  });


  if ($(window).width() < 900) {
    $(".teachers__btn").on('click', function () {
      $('.teachers__galery').slideToggle(function () {
        if ($(this).is(':visible'))
          $(this).css('display', 'grid');
      });
    })
  } else {};

  var $classes = $('#classes__inner');

  $classes.mixItUp();

  $('#selectTypes, #selectInstructors, #selectDuration, #selectLevel').on('change', function () {
    $classes.mixItUp('filter', this.value);
  });



});