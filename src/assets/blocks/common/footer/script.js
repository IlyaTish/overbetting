/* Variables */

const footerMenuMedia   = document.querySelector('.footer-menu.media-col-1'),
      footerMenuCol_1   = document.querySelector('.footer-menu__col--1'),
      footerMenuCol_2   = document.querySelector('.footer-menu__col--2'),
      footerContentCont = document.querySelector('.footer-content__cont'),

      footerMenuCompetition = document.querySelector('.footer-menu__col--1 .footer-menu.competition'),
      footerMenuNotes       = document.querySelector('.footer-menu.notes');

let footer_flag = 1;



/* Functions */

// Teleport onResize function
const footerTeleport = () => {
  const viewportWidth = window.innerWidth || document.documentElement.clientWidth;

  if ((viewportWidth < 1199) && (footer_flag === 1)) {
    footer_flag = 0;
    appendElem(footerMenuCompetition, footerMenuMedia);
    appendElem(footerMenuNotes, footerMenuCol_2);
  }

  if ((viewportWidth > 1199) && (footer_flag === 0)) {
    footer_flag = 1;
    appendElem(footerMenuCompetition, footerMenuCol_1);
    appendElem(footerMenuNotes, footerContentCont);
  }
}



/* Execution of functions */

if (viewportWidth < 1199) appendElem(footerMenuCompetition, footerMenuMedia);
if (viewportWidth > 1199) appendElem(footerMenuCompetition, footerMenuCol_1);

if (viewportWidth < 1199) appendElem(footerMenuNotes, footerMenuCol_2);
if (viewportWidth > 1199) appendElem(footerMenuNotes, footerContentCont);