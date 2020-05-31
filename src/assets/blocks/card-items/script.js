//= require data.js

/* Variables */

const cardItem = document.querySelectorAll('.card-item');
let cardItems_flag = 1;



/* Functions */

// Set data content
const setData = arr => {
  [].forEach.call(cardItem, (el, index) => {
    const cardItemP = el.querySelector('.card-item__p');

    arr.map((data, dataIndex) => {
      if (dataIndex === index) {
        return cardItemP.textContent = ''+ data +'';
      }
    })
  })
}

// Set data onResize function
const setCardItemsData = (arr_1, arr_2) => {
  const viewportWidth = window.innerWidth || document.documentElement.clientWidth;

  if ((viewportWidth < 1199) && (cardItems_flag === 1)) {
    cardItems_flag = 0;
    setData(arr_1);
  }

  if ((viewportWidth > 1199) && (cardItems_flag === 0)) {
    cardItems_flag = 1;
    setData(arr_2);
  }
}



/* Execution of functions */

if (viewportWidth < 1199) setData(DATA_CONTENT_MEDIA);
if (viewportWidth > 1199) setData(DATA_CONTENT_DESKTOP);