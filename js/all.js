
/*LOGO移出顯示效果*/

//是否已經移出
var isElementMovedOut = false;
// 滑鼠是否在logo上
var isMouseOnLogoIcon = false;

window.addEventListener('scroll', function() {
    var scrollHeight = window.scrollY;
    var windowHeight = window.innerHeight;
    // var scrollPosition = scrollHeight / windowHeight;
  
    if ( scrollHeight > 0 && !isElementMovedOut) {
      enableMouseEventListeners();
      myFunction();
    } else if (scrollHeight === 0 && isElementMovedOut) {
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

 /*----- nav  -----*/
 let mobile = $(window).width();
 if(mobile <= 414){
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
}else{
  $('.nav').show();
}
