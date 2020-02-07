document.addEventListener('DOMContentLoaded', () => {
  const mySwiper = new Swiper('.swiper-container', {
    slidesPerView: 1,
    loop: true,
    navigation: {
      nextEl: '.arrow',
    },

    breakpoints: {
      // when window width is >= 320px
      540: {
        slidesPerView: 2,
      }
    }
  });

  const menuButton = document.querySelector('.menu-button');
  const header = document.querySelector('.header');


  menuButton.addEventListener('click', ()=> {
    header.classList.toggle('header-active');
    // header.style = "transition: 2s;"
    // menuButton.classList.toggle('menu-button');
    menuButton.classList.toggle('menu-button-active');
    // menuButton.classList.add('menu-button-active');

  });
});