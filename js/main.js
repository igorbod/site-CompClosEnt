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

  
  // Scroll To Top Button
  const btnScrollToTop = document.querySelector("#btnScrollToTop");

  window.addEventListener("scroll", scrollFunction);

  function scrollFunction() {

    if (window.pageYOffset > 300) { //Show our button when user scroll down 300px
      // btnScrollToTop.style.display = "block";
      btnScrollToTop.style.opacity = 1;

    } else {                        //Hide button
      // btnScrollToTop.style.display = "none";
      btnScrollToTop.style.opacity = 0;
    }
  }

  btnScrollToTop.addEventListener('click', function () {
    // window.scrollTo(0, 0); //Simple use without animation

    window.scrollTo({  //Simple use with smoth scroll
      top: 0,
      left: 0,
      behavior: "smooth"
    });
  });

});