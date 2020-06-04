ready(() => {
  /* Variables */

  const compFilters       = document.querySelectorAll('.comp-filters'),
        compFiltersFilter = '.comp-filters__filter';



  /* Execution of functions */

  setActive(compFilters, compFiltersFilter);

  const compFiltersSwiper = new Swiper('.comp-filters', {
    loop: false,
    slidesPerView: 'auto',
    spaceBetween: 4,
    allowTouchMove: true,
    breakpoints: {
      767: {
        allowTouchMove: false,
      }
    }
  })
});