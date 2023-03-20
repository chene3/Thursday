
/*LOGO移出顯示效果*/

//是否已經移出
var isElementMovedOut = true;
// 滑鼠是否在logo上
var isMouseOnLogoIcon = false;

window.addEventListener('scroll', function() {
var scrollHeight = window.scrollY;
var windowHeight = window.innerHeight;
var scrollPosition = scrollHeight / windowHeight;
if (scrollPosition >= 1 && !isElementMovedOut && !isMouseOnLogoIcon) {
    myFunction();
}else if(scrollPosition < 0 && isElementMovedOut) {
    myFunction(false);
}
});
// 如果滾輪往上滾動
document.addEventListener('wheel', function(event) {
if (event.deltaY < 0 && isElementMovedOut && !isMouseOnLogoIcon) {
    myFunction(false);
}
});

document.addEventListener('mouseover', function(event) {
if (event.target.id === 'logoIcon') {
    isMouseOnLogoIcon = true;
    myFunction(false);
}
});
document.addEventListener('mouseout', function(event) {
if (event.target.id === 'logoIcon') {
    isMouseOnLogoIcon = false;
    myFunction();
}
});

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