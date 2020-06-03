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
  if (cont) cont.appendChild(elem)
}

// Set active class
const setActive = (elems, childElems) => {
  [].forEach.call(elems, (item, index) => {
    item.addEventListener('click', e => {
      const target = e.target;

      if (target === item) return;

      [].forEach.call(childElems, (childItem, index) => {
        childItem.classList.remove('active');
        target.classList.add('active');
      })
    })
  });
}



/* Exports */

//= require ../blocks/common/header/script.js
//= require ../blocks/@index/card/script.js
//= require ../blocks/@index/card-items/script.js
//= require ../blocks/@index/card-slider/script.js
//= require ../blocks/@index/blog/script.js

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