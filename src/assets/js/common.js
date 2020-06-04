/* Variables */

const viewportWidth   = window.innerWidth || document.documentElement.clientWidth;



/* Functions */

// Document ready function
const ready = callback => {
  if (document.readyState != 'loading') callback();
  else document.addEventListener('DOMContentLoaded', callback);
}

// Teleport function
const appendElem = (elem, cont) => {
  if (cont && elem) cont.appendChild(elem)
}

// Set active class
const setActive = (elems, selector) => {
  [].forEach.call(elems, (item, index) => {
    item.addEventListener('click', e => {
      const target = e.target,
            childs = item.querySelectorAll(''+ selector +'');

      if (target === item) return;

      [].forEach.call(childs, (childItem, index) => {
        childItem.classList.remove('active');
        target.classList.add('active');
      })
    })
  })
}

// Popovers
const popover = (arr, pop, popClass, flag) => {
  document.addEventListener('click', e => {
    const target = e.target;

    [].forEach.call(arr, (el, index) => {
      const isClickInside = el.contains(target);

      if (target.classList.contains(popClass)) {
        const popoverHeight = pop.clientHeight,
              targetHeight  = target.clientHeight + 4,

              popoverWidth  = pop.clientWidth,
              targetWidth   = target.clientWidth;

        const btnPoc  = target.getBoundingClientRect(),
              btnTop  = (btnPoc.bottom + pageYOffset) - (popoverHeight + targetHeight),
              btnLeft = (btnPoc.left + pageXOffset) - (popoverWidth - targetWidth);

        pop.style.transform     = 'translate3d('+ btnLeft +'px, '+ btnTop +'px, 0)';
        pop.style.top           = '0';
        pop.style.left          = '0';
        pop.style.willChange    = 'transform'; 
        pop.style.opacity       = '1';
        pop.style.pointerEvents = 'all';

        if (flag === 1) pop.style.transition = '.2s';
        if (flag === 0) pop.style.transition = 'opacity .2s';
        flag = 1;

        return;
      }

      else {
        flag = 0;

        pop.style.opacity       = '0';
        pop.style.pointerEvents = 'none';
      }
    })
  })
}



/* Exports */

//= require ../blocks/common/header/script.js
//= require ../blocks/@index/card/script.js
//= require ../blocks/@index/card-items/script.js
//= require ../blocks/@index/card-slider/script.js
//= require ../blocks/@index/blog/script.js

//= require ../blocks/@competition/script.js
//= require ../blocks/@competition/comp-head/script.js

//= require ../blocks/common/footer/script.js



/* Execution of functions */

ready(() => {
  window.onresize = () => {
    headerTeleport();
    blogTeleport();
    setCardItemsData(DATA_CONTENT_MEDIA, DATA_CONTENT_DESKTOP);
    footerTeleport();
  }
});