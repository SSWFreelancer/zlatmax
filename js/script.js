$(document).ready(function () {
   $('.main__slider').slick({
      arrows: false,
      dots: true,
      appendDots: $('.slider-main__dots'),
      adaptiveHeight: true,
      slidesToShow: 1,
      speed: 1000,
      easing: 'ease-in',
      infinite: true,
      autoplay: false,
      autoplaySpeed: 2000,
      pauseOnFocus: true,
      pauseOnHover: true,
      pauseOnDotsHover: true,
      draggable: true,
      swipe: true,
      touchThreshold: 5,
   });
    $('.main__slider')
     .on('afterChange', function(event, slick, currentSlide, nextSlide){
         $('.main__fraction span span').html(currentSlide + 1);
     });
     console.log($('.main__slider'));
   $('.objects').slick({
      arrows: false,
      dots: true,
      adaptiveHeight: true,
      slidesToShow: 4,
      speed: 1000,
      easing: 'ease-in',
      infinite: true,
      autoplay: false,
      autoplaySpeed: 10000,
       responsive: [
          {
            breakpoint: 1518,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
            },
          },
          {
            breakpoint: 1118,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
            },
          },                             
      ],
      draggable: true,
      swipe: true,
      touchThreshold: 5,
      slidesToScroll: 4,
   });
      $('.objects1').slick({
      arrows: false,
      dots: true,
      adaptiveHeight: true,
      slidesToShow: 3,
      speed: 1000,
      easing: 'ease-in',
      infinite: true,
      autoplay: false,
      autoplaySpeed: 10000,
      draggable: true,
      swipe: true,
      touchThreshold: 5,
      slidesToScroll: 3,
   });
});


$(document).ready(function () {
   $('.bottom-header__menu__item-1').mouseenter(function (event) {
      $('.header-absolute').addClass('active');
      $('.bottom-header__menu__item-1').addClass('active');
   });
   $('.header-absolute').mouseleave(function (event) {
      $('.header-absolute').removeClass('active');
      $('.bottom-header__menu__item-1').removeClass('active');
   });
   $('.header__mid').mouseenter(function (event) {
      $('.header-absolute').removeClass('active');
      $('.bottom-header__menu__item-1').removeClass('active');
   });
});