const btnCase = document.querySelectorAll('.cases__item-button')
const hoverBlock = document.querySelector('.cases__item-info')
const casesBlock = document.querySelector('.cases__items')
const btnClosehoverBlock = document.querySelector('.cases__item-info__close')
const btnOpenVideo = document.querySelector('.lecture__right-show')
const btnCloseVideo = document.querySelector('.lecture__video-closed')
const anchors = document.querySelectorAll('a[href*="#"]')
const btnAcordeon = document.querySelectorAll('.faq__accordeon-item-title__button')
const accordeonContent = document.querySelectorAll('.faq__accordeon-item')
// const swiper = new Swiper('.mySwiper', {
//   // Optional parameters
//   direction: 'horizontal',
//   loop: true,

//   // If we need pagination
//   pagination: {
//     el: '.swiper-pagination',
//   },

//   // Navigation arrows
//   navigation: {
//     nextEl: '.swiper-button-next',
//     prevEl: '.swiper-button-prev',
//   },

//   // And if we need scrollbar
//   scrollbar: {
//     el: '.swiper-scrollbar',
//   },
// });

// Изменение цвета хедера
window.addEventListener('scroll', () => {
  const posTop = document.querySelector('.section-green').getBoundingClientRect().top;
  const blocks = document.querySelectorAll('.section-green')
  console.log(window.innerHeight, posTop, blocks) // доделать изменение хедера при скролле
})
// ----------
// Скролл по якорям
for (let anchor of anchors) {
  anchor.addEventListener('click', (event) => {
    event.preventDefault();
    const blockId = anchor.getAttribute('href')
    document.querySelector('' + blockId).scrollIntoView({
      behavior: "smooth",
      block: "start"
    })
  })
}
// --------

btnClosehoverBlock.addEventListener('click', () => {
  hoverBlock.classList.add('is-closed')
})
for (let i = 0; i < btnCase.length; i++) {
  btnCase[i].onclick = function () {

    if (i <= 3) {
      hoverBlock.style.top = '20px'
    } else if (i > 3 && i <= 7) {
      hoverBlock.style.top = '35%'
    } else {
      hoverBlock.style.top = '69%'
    }
    switch (i) {
      case 0:
        hoverBlock.querySelector('.cases__item-info_company-logo').src = "images/Наука.png"
        hoverBlock.querySelector('.cases__item-info_company-name').innerHTML = "ГК «Москабельмет»"
        hoverBlock.querySelector('.cases__item-info_company-description').innerHTML = "Сегодня ГК «Москабельмет» объединяет 5 заводов, предприятия торговли и сервисного обслуживания, объекты социальной инфраструктуры и лаборатории."
        hoverBlock.querySelector('.cases__item-info_tasks-title').innerHTML = "Машинное обучение для повышения эффективности отдела продаж"
        hoverBlock.querySelector('.cases__item-info_tasks-desription').innerHTML = "В отдел продаж ежедневно приходит тысячи электронных писем. Задача: автоматизировать поиск во входящей корреспонденции номенклатуры предприятия.\nИмеется тренировочная выборка из нескольких тысяч писем и созданные на основании этих писем списки номенклатур, есть список релевантной номенклатуры продукции предприятия.Требуется на контрольной выборке обеспечить точность поиска номенклатуры продукции не менее 96 %."
        break;
      case 1:
        hoverBlock.querySelector('.cases__item-info_company-logo').src = "images/Мосинжпроект.svg"
        hoverBlock.querySelector('.cases__item-info_company-name').innerHTML = "Пауке"
        hoverBlock.querySelector('.cases__item-info_company-description').innerHTML = "Пауке"
        hoverBlock.querySelector('.cases__item-info_tasks-title').innerHTML = "Пауке"
        hoverBlock.querySelector('.cases__item-info_tasks-desription').innerHTML = "Пауке"
        break;
      case 2:
        hoverBlock.querySelector('.cases__item-info_company-logo').src = "images/Монарх.svg"
        hoverBlock.querySelector('.cases__item-info_company-name').innerHTML = "Пауке"
        hoverBlock.querySelector('.cases__item-info_company-description').innerHTML = "Пауке"
        hoverBlock.querySelector('.cases__item-info_tasks-title').innerHTML = "Пауке"
        hoverBlock.querySelector('.cases__item-info_tasks-desription').innerHTML = "Пауке"
        break;
      case 3:
        hoverBlock.querySelector('.cases__item-info_company-logo').src = "images/Молния.png"
        hoverBlock.querySelector('.cases__item-info_company-name').innerHTML = "Пауке"
        hoverBlock.querySelector('.cases__item-info_company-description').innerHTML = "Пауке"
        hoverBlock.querySelector('.cases__item-info_tasks-title').innerHTML = "Пауке"
        hoverBlock.querySelector('.cases__item-info_tasks-desription').innerHTML = "Пауке"
        break;
      case 4:
        hoverBlock.querySelector('.cases__item-info_company-logo').src = "images/РКС.png"
        hoverBlock.querySelector('.cases__item-info_company-name').innerHTML = "Пауке"
        hoverBlock.querySelector('.cases__item-info_company-description').innerHTML = "Пауке"
        hoverBlock.querySelector('.cases__item-info_tasks-title').innerHTML = "Пауке"
        hoverBlock.querySelector('.cases__item-info_tasks-desription').innerHTML = "Пауке"
        break;
      case 5:
        hoverBlock.querySelector('.cases__item-info_company-logo').src = "images/Москабельнет.png"
        hoverBlock.querySelector('.cases__item-info_company-name').innerHTML = "Пауке"
        hoverBlock.querySelector('.cases__item-info_company-description').innerHTML = "Пауке"
        hoverBlock.querySelector('.cases__item-info_tasks-title').innerHTML = "Пауке"
        hoverBlock.querySelector('.cases__item-info_tasks-desription').innerHTML = "Пауке"
        break;
      case 6:
        hoverBlock.querySelector('.cases__item-info_company-logo').src = "images/ЩЛЗ.png"
        hoverBlock.querySelector('.cases__item-info_company-name').innerHTML = "Пауке"
        hoverBlock.querySelector('.cases__item-info_company-description').innerHTML = "Пауке"
        hoverBlock.querySelector('.cases__item-info_tasks-title').innerHTML = "Пауке"
        hoverBlock.querySelector('.cases__item-info_tasks-desription').innerHTML = "Пауке"
        break;
      case 7:
        hoverBlock.querySelector('.cases__item-info_company-logo').src = "images/Газпром.png"
        hoverBlock.querySelector('.cases__item-info_company-name').innerHTML = "Пауке"
        hoverBlock.querySelector('.cases__item-info_company-description').innerHTML = "Пауке"
        hoverBlock.querySelector('.cases__item-info_tasks-title').innerHTML = "Пауке"
        hoverBlock.querySelector('.cases__item-info_tasks-desription').innerHTML = "Пауке"
        break;
      case 8:
        hoverBlock.querySelector('.cases__item-info_company-logo').src = "images/ММП.png"
        hoverBlock.querySelector('.cases__item-info_company-name').innerHTML = "Пау1"
        hoverBlock.querySelector('.cases__item-info_company-description').innerHTML = "Пауке"
        hoverBlock.querySelector('.cases__item-info_tasks-title').innerHTML = "Пауке"
        hoverBlock.querySelector('.cases__item-info_tasks-desription').innerHTML = "Пауке"
        break;
    }
    hoverBlock.classList.remove('is-closed')
  };
}
// Открытие/Закрытие видео
btnOpenVideo.addEventListener('click', () => {
  const video = document.querySelector('.lecture__video');
  video.classList.remove('is-closed')
})
btnCloseVideo.addEventListener('click', () => {
  const video = document.querySelector('.lecture__video');
  const videoFrame = document.querySelector('.lecture__video-frame');
  const src = videoFrame.src
  videoFrame.src = "";
  video.classList.add('is-closed')
  videoFrame.src = src
})
// -------
// Открытие/закрытие аккордеона
for (let i = 0; i < btnAcordeon.length; i++) {
  btnAcordeon[i].onclick = function () {
    btnAcordeon[i].classList.toggle('active')
    accordeonContent[i].querySelector('.faq__accordeon-item-description').classList.toggle('closed')
    // if (i <= 3) {
    //   hoverBlock.style.top = '20px'
    // } else if (i > 3 && i <= 7) {
    //   hoverBlock.style.top = '35%'
    // } else {
    //   hoverBlock.style.top = '69%'
    // }
  };
}
// btnAcordeon.addEventListener('click', (event) => {
//   console.log(event.target)
// })