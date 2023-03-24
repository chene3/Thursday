
/*LOGO移出顯示效果*/

//是否已經移出
var isElementMovedOut = true;
// 滑鼠是否在logo上
var isMouseOnLogoIcon = false;

window.addEventListener('scroll', function() {
    var scrollHeight = window.scrollY;
    var windowHeight = window.innerHeight;
    var scrollPosition = scrollHeight / windowHeight;
  
    if (scrollPosition >= 1 && !isElementMovedOut) {
      enableMouseEventListeners();
      myFunction();
    } else if (scrollPosition < 1 && isElementMovedOut) {
      disableMouseEventListeners();
      myFunction(false);
    }
  });
  
  function enableMouseEventListeners() {
    document.addEventListener('mouseover', handleMouseOver);
    document.addEventListener('mouseout', handleMouseOut);
  }
  
  function disableMouseEventListeners() {
    document.removeEventListener('mouseover', handleMouseOver);
    document.removeEventListener('mouseout', handleMouseOut);
  }
  
  function handleMouseOver(event) {
    if (event.target.id === 'logoIcon') {
      isMouseOnLogoIcon = true;
      myFunction(false);
    }
  }
  
  function handleMouseOut(event) {
    if (event.target.id === 'logoIcon') {
      isMouseOnLogoIcon = false;
      myFunction();
    }
  }

function myFunction(moveOut = true) {
var element = document.getElementById('logoText');
if (moveOut) {
    element.style.transform = 'translateX(-130%)';
    isElementMovedOut = true;
} else {
    element.style.transform = '';
    isElementMovedOut = false;
}
}

/*------------run_button-------------*/
$("#run_button").click(function() {
  $('html, body').animate({
      scrollTop: $("#banner").offset().top
  }, 500);
});



/*-----------------news------------------*/
new Swiper('.swiper-container', {
  loop: true,
  
  navigation: {
    
    prevEl: '.swiper-button-prev',
    nextEl: '.swiper-button-next',
  },
  slidesPerView: 3,
  paginationClickable: true,
  slidesOffsetBefore : -330,
  breakpoints: {
    1920: {
      slidesPerView: 3,
      spaceBetween: 40
    },
    1028: {
      slidesPerView: 2,
      spaceBetween: 40
    },
    480: {
      slidesPerView: 1,
      spaceBetween: 40
    }
  }
});
