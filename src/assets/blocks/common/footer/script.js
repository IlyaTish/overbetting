/* Variables */

const menuMedia         = document.querySelector('.footer .menu.media-col-1'),
      menuCol_1         = document.querySelector('.footer .menu__col--1'),
      menuCol_2         = document.querySelector('.footer .menu__col--2'),
      footerContentCont = document.querySelector('.footer-content__cont'),

      menuCompetition   = document.querySelector('.menu.competition'),
      menuNotes         = document.querySelector('.footer .menu.notes');

let footer_flag = 1;



/* Functions */

// Teleport onResize function
const footerTeleport = () => {
  const viewportWidth = window.innerWidth || document.documentElement.clientWidth;

  if ((viewportWidth < 1199) && (footer_flag === 1)) {
    footer_flag = 0;
    appendElem(menuCompetition, menuMedia);
    appendElem(menuNotes, menuCol_2);
  }

  if ((viewportWidth > 1199) && (footer_flag === 0)) {
    footer_flag = 1;
    appendElem(menuCompetition, menuCol_1);
    appendElem(menuNotes, footerContentCont);
  }
}



/* Execution of functions */

if (viewportWidth < 1199) appendElem(menuCompetition, menuMedia);
if (viewportWidth > 1199) appendElem(menuCompetition, menuCol_1);

if (viewportWidth < 1199) appendElem(menuNotes, menuCol_2);
if (viewportWidth > 1199) appendElem(menuNotes, footerContentCont);