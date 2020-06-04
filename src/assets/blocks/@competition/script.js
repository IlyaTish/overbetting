ready(() => {
  /* Variables */

  const compTableUsers      = document.querySelectorAll('.comp-table__users'),
        compTableUsersClass = 'comp-table__users',
        usersPopover        = document.querySelector('.users-popover'),

        compTableRate       = document.querySelectorAll('.comp-table__rate'),
        compTableRateClass  = 'comp-table__rate',
        analyticsPopover    = document.querySelector('.analytics-popover');

  let usersPopover_flag     = 0,
      analyticsPopover_flag = 0;



  /* Execution of functions */

  popover(
    compTableUsers,
    usersPopover,
    compTableUsersClass,
    usersPopover_flag
  );

  popover(
    compTableRate,
    analyticsPopover,
    compTableRateClass,
    analyticsPopover_flag
  );
});