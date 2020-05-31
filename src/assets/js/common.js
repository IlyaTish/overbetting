/* Variables */

const viewportWidth   = window.innerWidth || document.documentElement.clientWidth;



/* Functions */

// Document ready function
const ready = (callback) => {
  if (document.readyState != 'loading') callback();
  else document.addEventListener('DOMContentLoaded', callback);
}


// Teleport function
const appendElem = (elem, cont) => {
  cont.appendChild(elem);
}



/* Exports */

//= require ../blocks/header/script.js
//= require ../blocks/card/script.js
//= require ../blocks/card-items/script.js
//= require ../blocks/card-slider/script.js
//= require ../blocks/blog/script.js
//= require ../blocks/footer/script.js



/* Execution of functions */

ready(() => {
  window.onresize = () => {
    headerTeleport();
    blogTeleport();
    setCardItemsData(DATA_CONTENT_MEDIA, DATA_CONTENT_DESKTOP);
    footerTeleport();
  }
});