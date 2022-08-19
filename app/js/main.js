// УПРАВЛЕНИЕ СВАЙПЕР-СЛАЙДЕРАМИ
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

  // УПАРАВЛЕНИЕ САЙДБАРОМ В КАТАЛОГЕ
  const navHeader = document.querySelectorAll('.nav-item__header');

  navHeader.forEach((item => {

    item.addEventListener('click', function (event){

      const list = event.target.parentElement.lastElementChild;
      const header = event.target;

      list.classList.toggle('active');
      header.classList.toggle('active');
      

    });

  }));











