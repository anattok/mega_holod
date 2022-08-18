const headerSlider = document.querySelector('.swiper-header');
const partnersSlider = document.querySelector('.swiper-partners');

const mySwiperOne = new Swiper(headerSlider,  {

    loop: true,
    pagination: {
        el: '.swiper-pagination-header',
        clickable: true,
      },
});

const mySwiperTwo = new Swiper(partnersSlider, {

  loop: true,
  slidesPerView: 4,

  navigation: {
    nextEl: '.swiper-partners-button-next',
    prevEl: '.swiper-partners-button-prev',
  },
 

  });












