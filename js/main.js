$(document).ready(function () {
  
  $('.slider__inner').slick({
    arrows: true,
    prevArrow: '<button type="button" class="button__prev"><span class="icon-chevron-left"></span></button>',
    nextArrow: '<button type="button" class="button__next"><span class="icon-chevron-right"></span></button>'
  });

  $('.news__item').slick({
    arrows: true,
    prevArrow: '<button type="button" class="button__prev button__prev_news"><span class="icon-chevron-left"></span></button>',
    nextArrow: '<button type="button" class="button__next button__next_news"><span class="icon-chevron-right"></span></button>'
  });

});