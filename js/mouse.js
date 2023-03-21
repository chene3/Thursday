const mouseFollower = document.getElementById("mouse-follower");
const tailDelay = 0.2; // 延遲時間，單位為秒
const tailLength = 5; // 尾巴的長度，單位為個
const tailSpacing = 2; // 尾巴的間距，單位為像素
let tailElements = [];

document.addEventListener("mousemove", function(event) {
  const mouseX = event.clientX;
  const mouseY = event.pageY; // 改用 event.pageY 取得整個頁面中的位置
  setTimeout(function() {
    const translateX = mouseX;
    const translateY = mouseY;
    addTail(mouseX, mouseY);
  }, tailDelay * 1000);
});

window.addEventListener("scroll", function() {
  const mouseX = event.clientX;
  const mouseY = event.pageY; // 改用 event.pageY 取得整個頁面中的位置
  addTail(mouseX, mouseY);
});

function addTail(x, y) {
  const tailElement = document.createElement("div");
  tailElement.className = "tail";
  tailElement.style.left = `${x}px`;
  tailElement.style.top = `${y}px`;
  tailElements.push(tailElement);
  mouseFollower.appendChild(tailElement);
  if (tailElements.length > tailLength) {
    const removedTail = tailElements.shift();
    mouseFollower.removeChild(removedTail);
  }
  setTimeout(function() {
    mouseFollower.removeChild(tailElement);
    tailElements.splice(tailElements.indexOf(tailElement), 1);
  }, tailDelay * 1000 + tailLength * tailSpacing);
}