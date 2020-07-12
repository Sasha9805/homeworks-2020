// // Кнопка в шапке
// var btn = document.querySelector("#btn");
// // Крестик
// var close = document.querySelector("#close");
// // Модально окно .modal
// var modal = document.querySelector("#modal");
// // Показ мод. окна
// btn.addEventListener("click", function() {
//   modal.classList.add("modal_visible");
//   // console.log(modal.classList);
//   // console.log("click");
// });
// // Скрытие мод. окна
// close.addEventListener("click", function() {
//   modal.classList.remove("modal_visible");
// });
// // console.log(btn);

// Используем jQuery
$(document).ready(function() {
  $('#btn').click(function() {
    $('#modal').addClass('modal_visible');
  });
  $('#close').click(function() {
    $('#modal').removeClass('modal_visible');
  });
  // console.log($('#btn'));

  // Плавная прокрутка вверх
  // Координата верхней части секции offer
  var offsetTopOffer = $('.offer').offset().top;
  // Координата верхняя при прокрутке
  // window and document в данном случае работают одинаково
  var top = $(window).scrollTop();
  // var top = $(document).scrollTop();
  // console.log(top + ' ' + offsetTopOffer + ' ' + typeof offsetTopOffer);
  // Если браузер Сафари
  var isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
  // Отлавливание события скролла окна документа
  $(window).scroll(function() {
    // top = $(document).scrollTop();
    top = $(window).scrollTop();
    // console.log(top);
    if (top >= (offsetTopOffer - 400)) {
      $('.arrow-up').addClass('arrow-up_visible')
    } else {
      $('.arrow-up').removeClass('arrow-up_visible')
    }
  });
  // Клик на кнопку "вверх", переносимся в начало страницы
  $('.arrow-up').click(function() {
    if (isSafari) {
      $('body').animate({ scrollTop: 0 }, 1000);
    } else {
      $('html').animate({ scrollTop: 0 }, 1000);
    }
  });

  // Слайдер Slick
  $('.slider').slick({
    slidesToShow: 3,
    prevArrow: $('.arrows__left'),
    nextArrow: $('.arrows__right'),
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  });

  // Валидация формы (jquery Validation Plugin)
  $('#brief-form').validate({
    rules: {
      username: {
        required: true,
        minlength: 2,
        maxlength: 15
      },
      phone: {
        required: true
      },
      email: {
        required: true,
        email: true
      }
    },
    messages: {
      username: {
        required: "Заполните это поле",
        minlength: jQuery.validator.format("Как минимум {0} символов(-а) требуется!"),
        maxlength: jQuery.validator.format("Как максимум {0} символов(-а) требуется!")
      },
      phone: {
        required: "Заполните это поле",
      }
      // Нужно изменять background-size!!! при добавлении полей
      // email: {
      //   required: "Заполните это поле",
      //   email: "Введите корректный email"
      // }
    },
    errorClass: "invalid",
    errorElement: "div"
    // Последний элемент будет с обводкой, нужен доп. клик
    // highlight: function () {
    //   console.log('ok');
    //   $('#brief-form').find('div').last().css('border', 'none');
    // }
  });
  // Первая форма в блоке offer
  $('#offer-form').validate({
    rules: {
      "username-offer": {
        required: true,
        minlength: 2,
        maxlength: 15
      },
      "phone-offer": {
        required: true
      }
    },
    messages: {
      "username-offer": {
        required: "Заполните поле с именем",
        minlength: jQuery.validator.format("Как минимум {0} символов(-а) требуется!"),
        maxlength: jQuery.validator.format("Как максимум {0} символов(-а) требуется!")
      },
      "phone-offer": {
        required: "Заполните поле с телефоном"
      }
    },
    errorClass: "invalid",
    errorElement: "div",
    errorLabelContainer: ".message",
    // wrapper: 'div',
    // Чтобы не убиралось первое сообщение, и была равномерная ширина, см. interface.sass для описания
    // success: function(div) {
    //   var divUser = $('.message').children().eq(0);
    //   var divPhone = $('.message').children().eq(1);
    //   console.log(divUser.html());
    //   console.log(divPhone);
    //   var temp;
    //   console.log(divUser.children().attr('id'));
    //   if (divUser.children().attr('id') == "phone-offer-error") {
    //     temp = divUser.html();
    //     divUser.html(divPhone.html());
    //     divPhone.html(temp);
    //   }
    // Эту строчку не нужно раскомментировать, если исп. флекс и замену сообщений
      // div.addClass("valid").text("Заполнено!");
    // },
    // Добавление отступа для блока с сообщениями об ошибке
    highlight: function (elem, errorClass, validClass) {
      $(elem).addClass(errorClass).removeClass(validClass);
      $('.message').css('margin-bottom', '28px');
    }
  });

  // Маска для телефона
  $('.input-phone').mask('+7 (999) 999-99-99');

  // Анимация с помощью keyframes
  // Высота экрана
  var pageBottom = $(window).innerHeight();
  // Верхняя точка экрана
  var pageTop = $(window).scrollTop();
  // Верхние точки анимируемых секций (эл-ов секций)
  var navbar = $('.navbar').offset().top;
  var heroList = $('.hero-list').offset().top;
  var offerBlock = $('.offer__block').offset().top;
  var cards = $('.cards').offset().top;
  var steps = $('.steps-block').offset().top;
  var advantages = $('.advantages-block').offset().top;
  var garanties = $('.garanty-block').offset().top;
  var brief = $('.brief-title').offset().top;
  var contacts = $('.contacts-list').offset().top;
  // Проверка, если уже в видимой части экрана эти секции (без прокрутки)
  // Если мы обновили страницу не в начале, то, чтобы при скролее вверх в том числе сработала анимация (вторая часть условия)
  // При подробном изучении jquery этот код, конечно, нужно рефакторить. Пока что цель - обучение
  if (pageTop + pageBottom >= navbar && (pageTop <= navbar)) {
    $('.navbar__logo').addClass('fadeLeft');
    $('.navbar__info').addClass('fadeRight');
  }
  if (pageTop + pageBottom >= heroList && (pageTop <= heroList)) {
    $('.hero-list__item').eq(0).addClass('backDown');
    $('.hero-list__item').eq(1).addClass('backRight');
    $('.hero-list__item').eq(2).addClass('backUp');
  }
  if (pageTop + pageBottom >= offerBlock && (pageTop <= offerBlock)) {
    $('.offer__input').eq(0).addClass('bounceLeft');
    $('.offer__input').eq(1).addClass('bounceRight');
    $('.offer__button').addClass('bounceUp');
    $('.offer__info').addClass('bounceUp');
  }
  if (pageTop + pageBottom >= cards && (pageTop <= cards)) {
    $('.price__card').eq(0).addClass('fadeUp-01');
    $('.price__card').eq(3).addClass('fadeUp-01');
    $('.price__card').eq(1).addClass('fadeUp-02');
    $('.price__card').eq(4).addClass('fadeUp-02');
    $('.price__card').eq(2).addClass('fadeUp-03');
    $('.price__card').eq(5).addClass('fadeUp-03');
  }
  if (pageTop + pageBottom >= steps && (pageTop <= steps)) {
    $('.steps__step').addClass('fadeLeft');
  }
  if (pageTop + pageBottom >= advantages && (pageTop <= advantages)) {
    $('.advantages__item').eq(0).addClass('bounceLeft');
    $('.advantages__item').eq(1).addClass('bounceUp');
    $('.advantages__item').eq(2).addClass('bounceRight');
  }
  if (pageTop + pageBottom >= garanties && (pageTop <= garanties)) {
    $('.garanty__item').addClass('fadeDown');
  }
  if (pageTop + pageBottom >= brief && (pageTop <= brief)) {
    $('#brief-form').children().addClass('backDown');
    $('.interview-list').children().addClass('backDown');
  }
  if (pageTop + pageBottom >= contacts && (pageTop <= contacts)) {
    $('.contacts-list').children().addClass('rotateRight');
  }
  // При скролле окна; обязательно нужно обновлять значения ВСЕХ переменных
  $(window).scroll(function () {
    pageTop = $(window).scrollTop();
    pageBottom = $(window).innerHeight();
    navbar = $('.navbar').offset().top;
    heroList = $('.hero-list').offset().top;
    offerBlock = $('.offer__block').offset().top;
    cards = $('.cards').offset().top;
    steps = $('.steps-block').offset().top;
    advantages = $('.advantages-block').offset().top;
    garanties = $('.garanty-block').offset().top;
    brief = $('.brief-title').offset().top;
    contacts = $('.contacts-list').offset().top;
    // Та же проверка условий
    if (pageTop + pageBottom >= navbar && (pageTop <= navbar)) {
      $('.navbar__logo').addClass('fadeLeft');
      $('.navbar__info').addClass('fadeRight');
    }
    if (pageTop + pageBottom >= heroList && (pageTop <= heroList)) {
      $('.hero-list__item').eq(0).addClass('backDown');
      $('.hero-list__item').eq(1).addClass('backRight');
      $('.hero-list__item').eq(2).addClass('backUp');
    }
    if (pageTop + pageBottom >= offerBlock && (pageTop <= offerBlock)) {
      $('.offer__input').eq(0).addClass('bounceLeft');
      $('.offer__input').eq(1).addClass('bounceRight');
      $('.offer__button').addClass('bounceUp');
      $('.offer__info').addClass('bounceUp');
    }
    if (pageTop + pageBottom >= cards && (pageTop <= cards)) {
      $('.price__card').eq(0).addClass('fadeUp-01');
      $('.price__card').eq(3).addClass('fadeUp-01');
      $('.price__card').eq(1).addClass('fadeUp-02');
      $('.price__card').eq(4).addClass('fadeUp-02');
      $('.price__card').eq(2).addClass('fadeUp-03');
      $('.price__card').eq(5).addClass('fadeUp-03');
    }
    if (pageTop + pageBottom >= steps && (pageTop <= steps)) {
      $('.steps__step').addClass('fadeLeft');
    }
    if (pageTop + pageBottom >= advantages && (pageTop <= advantages)) {
      $('.advantages__item').eq(0).addClass('bounceLeft');
      $('.advantages__item').eq(1).addClass('bounceUp');
      $('.advantages__item').eq(2).addClass('bounceRight');
    }
    if (pageTop + pageBottom >= garanties && (pageTop <= garanties)) {
      $('.garanty__item').addClass('fadeDown');
    }
    if (pageTop + pageBottom >= brief && (pageTop <= brief)) {
      $('#brief-form').children().addClass('backDown');
      $('.interview-list').children().addClass('backDown');
    }
    if (pageTop + pageBottom >= contacts && (pageTop <= contacts)) {
      $('.contacts-list').children().addClass('rotateRight');
    }
  });
});