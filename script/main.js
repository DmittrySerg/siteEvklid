const form = document.querySelector('.header__form');
const openSearch = document.getElementById('search');
const openSearchButton = document.getElementById('open-search-button');
const closedSearchButton = document.querySelector('.close-search');
const headerNav = document.querySelector('.header__nav');

const questionsButtons = document.querySelectorAll('.questions-link-effect');
const tabItems = document.querySelectorAll('.tabs-item');

const burger = document.querySelector('.burger')
const cross = document.querySelectorAll('.ac-trigger')

const navList = document.querySelector('.header__nav')

openSearchButton.addEventListener('click', () => {
  form.classList.toggle('search--active');
})

closedSearchButton.addEventListener('click', (e) => {
  e.preventDefault;
  form.classList.toggle('search--active');
})

const swiper = new Swiper('.swiper', {
  loop: true,

  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    clickable: true,
  },
});


questionsButtons.forEach(button => button.addEventListener('click', (event) => {
  const path = event.currentTarget.dataset.path;
  console.log(path)

  questionsButtons.forEach(element => element.classList.remove('tabs-active'));
  event.currentTarget.classList.add('tabs-active')

  tabItems.forEach(item => item.classList.remove('tabs-item--active'))
  document.querySelector(`[data-target='${path}']`).classList.add('tabs-item--active')

}))

cross.forEach(elem => elem.addEventListener('click', (event) => {
  const path = event.currentTarget.dataset.path;
  const crossCont = document.querySelector(`[data-target='${path}']`)
  if (crossCont.classList.contains('cross--active')) {
    crossCont.classList.remove('cross--active')
  } else {
    document.querySelectorAll('.cross-cont').forEach(cont => cont.classList.remove('cross--active'));
    crossCont.classList.add('cross--active')
  }
}))

new Accordion('.accordion');

burger.addEventListener('click', () => {

  document.getElementById('burger-second-line').classList.toggle('burger-second-line--active');
  document.getElementById('burger-third-line').classList.toggle('burger-third-line--active');
  document.getElementById('burger-first-line').classList.toggle('burger-first-line--active');
  navList.classList.toggle('header__nav--active')
  navList.style.transition ='transform 300ms ease-in-out, visibility 300ms ease-in-out'
})

navList.addEventListener('transitionend', () => {
  if (!navList.classList.contains('header__nav--active')) navList.style.transition =''
})
