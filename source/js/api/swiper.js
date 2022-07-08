const swiper = new Swiper('.promo', {
  loop: true,
  grabCursor: true,

  pagination: {
    el: '.promo__pagination',
    bulletClass: 'promo__pagination-bullet',
    bulletActiveClass: 'promo__pagination-bullet--active',
    clickable: true,
  },

  navigation: {
    nextEl: '.promo__navigation--next',
    prevEl: '.promo__navigation--prev',
    disabledClass: 'promo__navigation--disabled',
    enabled: true,
  },
});
