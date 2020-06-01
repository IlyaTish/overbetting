/* Variables */

const mainPost        = document.querySelector('.main-post'),
      mainPostContent = document.querySelector('.main-post__content'),
      mainPostP       = document.querySelector('.main-post__p');

let flag = 1;



/* Functions */

// Teleport onResize function
const blogTeleport = () => {
  const viewportWidth = window.innerWidth || document.documentElement.clientWidth;

  if ((viewportWidth < 991) && (flag === 1)) {
    flag = 0;
    appendElem(mainPostP, mainPost);
  }

  if ((viewportWidth > 991) && (flag === 0)) {
    flag = 1;
    appendElem(mainPostP, mainPostContent);
  }
}



/* Execution of functions */

if (viewportWidth < 991) appendElem(mainPostP, mainPost);
if (viewportWidth > 991) appendElem(mainPostP, mainPostContent);