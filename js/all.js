
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


/*-------------att_into_imgslide-----------------*/

var main = document.getElementsByClassName("img_main")[0];
var item2 = document.getElementById("item2");
var img_sild = document.getElementsByClassName("img_sild_c");
var currentIndex = 0;
var intervalId = setInterval(changeImage, 3000);

function changeImage() {
  
  currentIndex = (currentIndex + 1) % img_sild.length;
  var new_img = img_sild[currentIndex].innerHTML;
  main.querySelector("img").remove();
  main.insertAdjacentHTML('beforeend', new_img);
}

function restartTimer(index) {
  currentIndex = index;
  clearInterval(intervalId);
  intervalId = setInterval(changeImage, 3000);
}

for(let i = 0; i < img_sild.length; i++){
  img_sild[i].addEventListener("mousedown", function(){
    var new_img = img_sild[i].innerHTML;
    main.querySelector("img").remove();
    main.insertAdjacentHTML('beforeend', new_img);
    restartTimer(i);
  });
}
