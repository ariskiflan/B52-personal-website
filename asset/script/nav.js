const btnNavEL = document.querySelector(".nav-icon-mobile");
const mainNavEl = document.querySelector(".main-nav");

btnNavEL.addEventListener("click", function () {
  mainNavEl.classList.toggle("active-mobile");
});
