$(document).ready(function () {
  
  window.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('.menu'),
      menuItem = document.querySelectorAll('.menu__link'),
      hamburger = document.querySelector('.hamburger');

    hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('hamburger_active');
      menu.classList.toggle('menu_active');
    });

    menuItem.forEach(item => {
      item.addEventListener('click', () => {
        hamburger.classList.toggle('hamburger_active');
        menu.classList.toggle('menu_active');
      });
    });
  });
  
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