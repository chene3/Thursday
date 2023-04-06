
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
  paginationClickable: true,
  // autoplay:true,

  breakpoints: {
    1920: {
      slidesPerView: 3,
      spaceBetween: 40,
      slidesOffsetBefore : -330
    },
    1028: {
      slidesPerView: 2,
      spaceBetween: 40,
      slidesOffsetBefore : -330
    },
    480: {
      slidesPerView: 1,
      spaceBetween: 40,
      slidesOffsetBefore : 0,
      autoplay:true
    }
  }
});

/*----- 最後一個slide -----*/
let moblie = $(window).width();

if(moblie <= 414){
  var swiper = new Swiper(".mySwiper", {
    loop: true,
    autoplay:true,
    slidesPerView: 1.3,
    spaceBetween: 5,
    centeredSlides: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    // on: {
    //   slideChangeTransitionStart: function () {
    //     // 取消目前幻燈片子元素的 filter class
    //     var currentSlide = this.slides[this.activeIndex];
    //     var currentSlideChildren = currentSlide.querySelectorAll(".filter-on");
    //     currentSlideChildren.forEach(function (child) {
    //       child.classList.remove("filter");
    //       child.classList.remove("filter-on");
    //     });
  
    //     // 為前一個幻燈片子元素新增 filter-on class
    //     var prevSlide = this.slides[this.previousIndex];
    //     var prevSlideChildren = prevSlide.querySelectorAll(".filter");
    //     prevSlideChildren.forEach(function (child) {
    //       child.classList.add("filter-on");
    //     });
    //   },
    // },
  });
  swiper.on('slideChange', function() {
    console.log('目前顯示的幻燈片索引為 ' + (swiper.realIndex + 1));
  });

  /*----- nav  -----*/
  $(document).ready(function() {
    $('.nav').hide();
    var burger = $('.burger');
    var nav = $('.nav');
    burger.click(function() {
      nav.fadeToggle();
      $('body').toggleClass('no-scroll');
      $('#nav-icon3').toggleClass('open');
    });
  });
  
  /*----- 最後一個slide -----*/


}

