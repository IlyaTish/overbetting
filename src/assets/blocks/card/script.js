const cardFilters = document.querySelectorAll('.card-filters');

[].forEach.call(cardFilters, (el, index) => {
  el.classList.add('card-filter-'+ index);

  const cardFilters = new Swiper('.card-filters', {
    loop: false,
    slidesPerView: 'auto',
    spaceBetween: 4,
    allowTouchMove: true,
    breakpoints: {
      549: {
        allowTouchMove: false,
      }
    }
  })
});