//УПАРВЛЕНИЕ БУРГЕР МЕНЮ 

const burgerBtn = document.querySelector('.menu__btn');

burgerBtn.addEventListener('click', ()=>{

  const menuList = document.querySelector('.menu__list');
  
  if(menuList.classList.contains('active')){
    menuList.style.cssText ='transform: translateX(-200%); transition: all .5s';
    menuList.classList.remove('active');

  }else{
    menuList.classList.add('active');
    menuList.style.cssText ='transform: translateX(0); transition: all .5s';
  }
  
});





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

  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
      spaceBetween: 20
    },
    // when window width is >= 480px
    480: {
      slidesPerView: 2,
      spaceBetween: 30
    },
    // when window width is >= 640px
    640: {
      slidesPerView: 3,
      spaceBetween: 40
    },
    768: {
      slidesPerView: 4,
      spaceBetween: 40
    }
  }

});


//ДАННЫЕ ТОВАРОВ

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
    "img": "images/products/kholodilnoe-oborudovanie/vitrina_nizkotemperaturnaya.jpg",
    "brand": "Бренд 2",
    "size": "20х30х500мм",
    "volt": "220v",
    "temp": "+1 - +10C"

  },
  "3": {
    "name": "Ларь морозильный МЛП-400",
    "link": "product.html",
    "img": "images/products/kholodilnoe-oborudovanie/vitrina_srednetemperaturnaya.jpg",
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

let torg = {
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
  "4": {
    "name": "ааавтомобиль",
    "link": "product.html",
    "img": "https://s0.rbk.ru/v6_top_pics/media/img/8/25/756462167448258.jpg",
    "brand": "Бренд 3",
    "size": "20х30х500мм",
    "volt": "220v",
    "temp": "+1 - +10C"
  },
  "5": {
    "name": "капуста",
    "link": "product.html",
    "img": "https://edaplus.info/food_pictures/cabbage.jpg",
    "brand": "Бренд 3",
    "size": "20х30х500мм",
    "volt": "220v",
    "temp": "+1 - +10C"
  },
};

/* let asideMenu = {
  'Холодильное оборудование' : ['Лари морозильные', 'Витрины кондитерские', 'Витрины низкотемпературные' ],
  'Оборудование для пекарни' : ['Оборудование для резки', 'Оборудование раскатки теста', 'Оборудование для расстойки'],
  'Торговое оборудование' : ['Кондитерские стеллажи', 'Торговые стеллажи', 'Другие стеллажи' ]
}; */


 //ВСЕ ВЫПАДАШКИ
 const allListAside = document.querySelectorAll('.nav-item__list');
 //ВСЕ item В ВЫПАДАШКЕ
 const allItemAside = document.querySelectorAll('.nav-item__item');

//СОЗДАЁМ БОКОВОЕ МЕНЮ
/* const asideDiv = document.querySelector('.aside');
asideDiv.innerHTML = '';



for (let key in asideMenu) {

  
  asideDiv.innerHTML = `
  
  <li class="nav-item">
  <div class="nav-item__header category-brands">${asideMenu[key]}</div>
  <ul class="nav-item__list">
      <li class="nav-item__item">
          <a href="#" class="nav-item__link">${asideMenu[key][1]}</a>
      </li>
      <li class="nav-item__item">
          <a href="#" class="nav-item__link">${asideMenu[key][1]}</a>
      </li>
      <li class="nav-item__item">
          <a href="#" class="nav-item__link">${asideMenu[key][2]}</a>
      </li>
    </ul>
  </li>
  
  `
}; */






const product = document.querySelector('.product');

// СКРЫВАЕМ CATALOG НА МЕНЬШЕ ЧЕМ 420PX
if (window.matchMedia("(max-width: 470px)").matches) {
  product.classList.add('hidden');
}






//ПСЕВДОМАССИВ ВСЕХ ЗАГОЛОВКОВ САЙДБАРА
const navHeader = document.querySelectorAll('.nav-item__header');
//КАТЕГОРИИ В САЙДБАРЕ
const fridge = document.querySelector('.category-fridge');
const bakery = document.querySelector('.category-bakery');
const trade = document.querySelector('.category-trade');


//СОЗДАНИЕ ХЛЕБНЫХ КРОШЕК
const breadcrumpsList = document.querySelector('.breadcrumps__list');
const breadcrumpsItems = document.querySelectorAll('.breadcrumps__item');




// УПАРАВЛЕНИЕ САЙДБАРОМ В КАТАЛОГЕ
//ПЕРЕБЕРЁМ ФОРИЧЕМ ВСЕ ЗАГОЛОВКИ В САЙДБАРЕ КУДА МОЖНО НАЖАТЬ
navHeader.forEach((item => {

  item.addEventListener('click', function (event) {

    //list ПРИСВАИВАЕМ ПОСЛЕДНИЙ ЭЛЕМЕНТ РОДИТЕЛЬСКОГО ЭЛЕМЕНТА ЗАГОЛОВКА ПО КОТОРОМУ КЛИКНУЛИ (это улка)
    const list = event.target.parentElement.lastElementChild;
    //header ПРИСВАИВАЕМ ДИВ НА КОТОРЫЙ НАЖАЛИ
    const header = event.target;


   

    //УДАЛИМ У ВСЕХ КАТЕГОРИЙ-ВЫПАДАШЕК КЛАСС ACTIVE ЧТОБЫ ОСТАЛЬНЫЕ ЗАКРЫЛИСЬ
    allListAside.forEach(item => {
      item.classList.remove('active');

    });

    //УДАЛИМ У ВСЕХ заголовков КАТЕГОРИЙ-ВЫПАДАШЕК КЛАСС ACTIVE ЧТОБЫ удалилась стрелка вверх
    navHeader.forEach(headerCategory => {
      headerCategory.classList.remove('active');

    });

    //ПРИСВАИВАЕМ КЛАСС active чтобы выпадашка появилась
    header.classList.add('active');



    //СОЗДАНИЕ ВЁРСТКИ КАРТОЧЕК ТОВАРОВ
    let itemCards = document.querySelector('.product__cards');


    if (header == fridge) {
      itemCards.innerHTML = "";
      list.classList.add('active');

      //ПЕРЕБОР item В ВЫПАДАШКЕ
      allItemAside.forEach((item => {

        item.addEventListener('click', function (event) {
      
          const navSubHeader = event.target;
          console.log(navSubHeader);
      
      
        });
      }));

      breadcrumpsList.insertAdjacentHTML("beforeend",

        `<li class="breadcrumps__item">
          <span class="breadcrumps__link" href="catalog.html">Холодильное оборудование</span>
      </li>

    `);

      for (let key in holod) {

        itemCards.innerHTML += `
          
          <li class="product__card">
              <div class="product__image"><img src="${holod[key].img}" alt=""></div>
              <h6 class="product__title">${holod[key].name}</h6>
              <div class="product__bottom">
                  <a href="product.html" class="product__more">Подробнее</a>
                  <a href="#" class="product__price">Узнать цену</a>
              </div>
          </li>
          
          `;

      }

    } else if (header == bakery) {

      itemCards.innerHTML = "";
      list.classList.add('active');

      breadcrumpsList.insertAdjacentHTML("beforeend",

        `<li class="breadcrumps__item">
          <span class="breadcrumps__link" href="catalog.html">Оборудование для пекарни</span>
      </li>

    `);

      for (let key in pekar) {

        itemCards.innerHTML += `
          
          <li class="product__card">
              <div class="product__image"><img src="${pekar[key].img}" alt=""></div>
              <h6 class="product__title">${pekar[key].name}</h6>
              <div class="product__bottom">
                  <a href="product.html" class="product__more">Подробнее</a>
                  <a href="#" class="product__price">Узнать цену</a>
              </div>
          </li>
          
          `;

      }
    } else if (header == trade) {

      itemCards.innerHTML = "";
      list.classList.add('active');

        //СОЗДАНИЕ ПОСЛЕДНЕГО ЭЛЕМЕНТА В ХЛЕБНЫХ КРОШКАХ
      breadcrumpsList.insertAdjacentHTML("beforeend",

        `<li class="breadcrumps__item">
          <span class="breadcrumps__link" href="catalog.html">Торговое оборудование</span>
      </li>

    `);

      for (let key in torg) {

        itemCards.innerHTML += `
          
          <li class="product__card">
              <div class="product__image"><img src="${torg[key].img}" alt=""></div>
              <h6 class="product__title">${torg[key].name}</h6>
              <div class="product__bottom">
                  <a href="product.html" class="product__more">Подробнее</a>
                  <a href="#" class="product__price">Узнать цену</a>
              </div>
          </li>
          
          `;

      }
    }

    const aside = document.querySelector('.aside');
    aside.classList.add('hidden');
    product.classList.remove('hidden');
    
  });

}));






/* 
breadcrumpsList.insertAdjacentHTML("beforeend",
  `<li class="breadcrumps__item">
              <a class="breadcrumps__link" href="catalog.html">Холодильное оборудование</a>
          </li>
        `); */
















