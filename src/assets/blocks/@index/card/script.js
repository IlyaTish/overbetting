ready(() => {
  /* Variables */

  const cardFilters       = document.querySelectorAll('.card-filters'),
        cardFiltersFilter = '.card-filters__filter';



  /* Execution of functions */

  setActive(cardFilters, cardFiltersFilter);

  [].forEach.call(cardFilters, (el, index) => {
    el.classList.add('card-filter-'+ index);

    const cardFiltersSwiper = new Swiper('.card-filters', {
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
  })
});