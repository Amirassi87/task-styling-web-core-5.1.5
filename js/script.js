const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: false,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

   // Navigation arrows
   navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  }, 

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});

//enabling the swiper in mobile size windows only
function checkWindowSize(windowSize) {
  if (windowSize.matches) {
    swiper.disable();
  } else {
    swiper.enable();
  }
}

let windowSize = window.matchMedia("(min-width: 481px)")

checkWindowSize(windowSize);

windowSize.addEventListener("change", function() {
  checkWindowSize(windowSize);
});

//check the hieght value of the swiper block and show/hide brand images according to hieght value retrieved 
function showHide() {
  const checkHieght = document.getElementById("swiper").style.height;

  if(checkHieght == "auto") {
    document.getElementById("swiper").style.height = "11.875em";
    document.getElementById("btn__show-hide").src = "images/ReadMore.png";
  } else {
    document.getElementById("swiper").style.height = "auto";
    document.getElementById("btn__show-hide").src = "images/hide.png";
  }
}