// УПРАВЛЕНИЕ СВАЙПЕР-СЛАЙДЕРАМИ
const headerSlider = document.querySelector('.swiper-header');
const partnersSlider = document.querySelector('.swiper-partners');

const mySwiperOne = new Swiper(headerSlider, {

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

  item.addEventListener('click', function (event) {

    const list = event.target.parentElement.lastElementChild;
    const header = event.target;

    list.classList.toggle('active');
    header.classList.toggle('active');


  });

}));



let holod = {
  "1": {
    "name": "Витрина кондитерская ВКО-50",
    "link": "product.html",
    "img": "images/products/kholodilnoe-oborudovanie/vitrina__konditerskaya.jpg",
    "brand": "Бренд 1",
    "size": "20х30х500мм",
    "volt": "220v",
    "temp": "+1 - +10C"

  },
  "2": {
    "name": "Витрина низкотемпературная ОКХ-100",
    "link": "product.html",
    "img": "images/products/kholodilnoe-oborudovanie/vitrina_srednetemperaturnaya.jpg",
    "brand": "Бренд 2",
    "size": "20х30х500мм",
    "volt": "220v",
    "temp": "+1 - +10C"

  },
  "3": {
    "name": "Ларь морозильный МЛП-400",
    "link": "product.html",
    "img": "images/products/oborudovanie-dlya-pekarni/mashina_dlya_rezki_khlebobulochnykh_izdeli.jpg",
    "brand": "Бренд 3",
    "size": "20х30х500мм",
    "volt": "220v",
    "temp": "+1 - +10C"

  },
};

let pekar = {
  "1": {
    "name": "Машина для резки хлебобулочных изделий",
    "link": "product.html",
    "img": "images/products/oborudovanie-dlya-pekarni/mashina_dlya_rezki_khlebobulochnykh_izdeli.jpg",
    "brand": "Бренд 1",
    "size": "20х30х500мм",
    "volt": "220v",
    "temp": "+1 - +10C"

  },
  "2": {
    "name": "Машина раскатки теста",
    "link": "product.html",
    "img": "images/products/oborudovanie-dlya-pekarni/mashina_raskatki_testa.jpg",
    "brand": "Бренд 2",
    "size": "20х30х500мм",
    "volt": "220v",
    "temp": "+1 - +10C"

  },
  "3": {
    "name": "Шкаф предварительной расстойки",
    "link": "product.html",
    "img": "images/products/oborudovanie-dlya-pekarni/shkaf_predvaritelnoy_rasstoyki.jpg",
    "brand": "Бренд 3",
    "size": "20х30х500мм",
    "volt": "220v",
    "temp": "+1 - +10C"

  },
};

torg = {
  "1": {
    "name": "Кондитерский стеллаж",
    "link": "product.html",
    "img": "images/products/torgovoe-oborudovanie/konditerskij_stellazh.jpg",
    "brand": "Бренд 1",
    "size": "20х30х500мм",
    "volt": "220v",
    "temp": "+1 - +10C"
  },
  "2": {
    "name": "Торговый стеллаж большой",
    "link": "product.html",
    "img": "images/products/torgovoe-oborudovanie/konditerskij_torgoviy.jpg",
    "brand": "Бренд 2",
    "size": "20х30х500мм",
    "volt": "220v",
    "temp": "+1 - +10C"
  },
  "3": {
    "name": "Стеллаж для бутылей",
    "link": "product.html",
    "img": "images/products/torgovoe-oborudovanie/stellazh_dlya_butyley.jpg",
    "brand": "Бренд 3",
    "size": "20х30х500мм",
    "volt": "220v",
    "temp": "+1 - +10C"
  },
};



/* let out = "";

for (let key in holod) {

  let itemImage = document.querySelector('.product__image');
  let itemTitle = document.querySelector('.product__title');
  let itemMore = document.querySelector('.product__more');
  let itemPrice = document.querySelector('.product__price');

  itemImage += holod[key].name;
  itemTitle += holod[key].img;
  itemMore += holod[key].link;
}

const item = document.querySelectorAll('.product__card');


itemTitle.forEach(item => {
  item.innerHTML = out;
})


localStorage.setItem('holod', JSON.stringify(holod));
localStorage.setItem('pekar', JSON.stringify(pekar));
localStorage.setItem('torg', JSON.stringify(torg)); */










