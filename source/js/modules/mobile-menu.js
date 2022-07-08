const navMain = document.querySelector('.navigation__list');
const navToggle = document.querySelector('.navigation__button');

navMain.classList.remove('navigation__list--no-js');
navMain.classList.add('navigation__list--closed');
navToggle.classList.remove('navigation__button--no-js');
navToggle.classList.add('navigation__button--open');

navToggle.addEventListener('click', () => {
  navToggle.classList.toggle('navigation__button--close');
  navToggle.classList.toggle('navigation__button--open');
  navMain.classList.toggle('navigation__list--closed');
  navMain.classList.toggle('navigation__list--opened');
  if (navToggle.classList.contains('navigation__button--open')) {
    navToggle.querySelector('span').textContent = 'Открыть меню навигации';
  } else {
    navToggle.querySelector('span').textContent = 'Закрыть меню навигации';
  }
});
