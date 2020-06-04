/* Variables */

const burgerBtn     = document.querySelector('.burger-btn'),
      burgerMenu    = document.querySelector('.burger-menu'),

      headerNav     = document.querySelector('.header-nav'),
      headerNavList = document.querySelector('.header-nav__list'),
      headerNavLink = document.querySelectorAll('.header-nav__link'),
      header        = document.querySelector('.header'),
      headerHeight  = header.clientHeight,

      targets       = document.querySelector('.header'),
      tooltipMenu   = document.querySelector('.tooltip-menu');

let header_flag = 1;



/* Functions */

// Tooltip
const tooltip = () => {
  [].forEach.call(headerNavLink, (el, index) => {
    el.addEventListener('mouseenter', e => {
      const target = e.target;

      const tooltipHeight = el.clientHeight,
            targetHeight  = target.clientHeight + 4,

            tooltipWidth  = el.clientWidth,
            targetWidth   = target.clientWidth;

      const headerPos     = header.getBoundingClientRect(),
            linkPoc       = target.getBoundingClientRect(),

            headerBottom  = headerPos.bottom + pageYOffset,
            linkLeft      = linkPoc.left + pageXOffset;

      tooltipMenu.style.transform     = 'translate3d('+ linkLeft +'px, '+ headerBottom +'px, 0)';
      tooltipMenu.style.top           = '0';
      tooltipMenu.style.left          = '0';
      tooltipMenu.style.willChange    = 'transform'; 
      tooltipMenu.style.opacity       = '1';
      tooltipMenu.style.pointerEvents = 'all';
    });

    targets.addEventListener('mouseleave', e => {
      tooltipMenu.style.opacity       = '0';
      tooltipMenu.style.pointerEvents = 'none';
    })
  })
}


// Teleport onResize function
const headerTeleport = () => {
  const viewportWidth = window.innerWidth || document.documentElement.clientWidth;

  if ((viewportWidth < 991) && (header_flag === 1)) {
    header_flag = 0;
    appendElem(headerNavList, burgerMenu);
  }

  if ((viewportWidth > 991) && (header_flag === 0)) {
    header_flag = 1;
    appendElem(headerNavList, headerNav);
  }
}


// Burger menu
const initBurgerMenu = () => {
  burgerBtn.addEventListener('click', e => {
    burgerBtn.classList.toggle('active');
    burgerMenu.classList.toggle('active');

    burgerMenu.classList.contains('active') ?
    burgerMenu.style.top = `${ headerHeight }px` :
    burgerMenu.style.top = `0px`;

    if (burgerMenu.classList.contains('hidden')) {
      // show
      burgerMenu.classList.add('transition');
      burgerMenu.clientWidth;
      burgerMenu.classList.remove('hidden');
    } else {
      // hide
      burgerMenu.classList.add('transition');
      burgerMenu.classList.add('hidden');
    }
  });

  burgerMenu.addEventListener('transitionend', () => {
    burgerMenu.classList.remove('transition');
  })
}



/* Execution of functions */

if (viewportWidth < 991) appendElem(headerNavList, burgerMenu);
if (viewportWidth > 991) appendElem(headerNavList, headerNav);

tooltip();
initBurgerMenu();

burgerMenu.style.top = `${ headerHeight }px`;