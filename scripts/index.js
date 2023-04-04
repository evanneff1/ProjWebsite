const menu = document.getElementById("menu");

Array.from(document.getElementsByClassName("menu-item")).forEach(
  (item, index) => {
    item.onmouseover = () => {
      menu.dataset.activeIndex = index;
    };
  }
);

function scrolldiv() {
  var elem = document.getElementById("fifthpicture");
  elem.scrollIntoView();
}
document.querySelector("button").addEventListener("click", (ev) => {
  document.getElementById("fifthpicture").scrollIntoView();
});

// const button = document.getElementsByClassName("right");

// button.onload = () => {
//   document.getElementsByClassName("right").scrollLeft = 200;
// };

function right() {
  document.getElementById("right").scrollLeft = 200;
}

// document.querySelectorAll(".section .tile img").forEach((image) => {
//   image.onclick = () => {
//     document.querySelector(".popup-imag").style.display = "block";
//     document.querySelector(".popup-imag img").src = image.getAttribute("src");
//   };
// });

// document.querySelector(".popup-imag span").onclick = () => {
//   document.querySelector(".popup-imag").style.display = "none";
// };

function getPics() {}
const imgs = document.querySelectorAll{'.section .tile img'};
const fullPage = document.querySelector('#fullpage');

imgs.forEach(img => {
  img.addEventListener('click', function() {
    fullPage.getElementsByClassName.backgroundImage = 
  }
})