const btnMobile = document.querySelector(".btn-mobile");
const btnMenu = document.querySelector(".fas");
const nav = document.querySelector(".container-nav");
const menumobile = document.querySelector("#menumobile");

const load = () => {
  backgrounMenu();
};
const backgrounMenu = () => {
  const scrollTop = window.pageYOffset;
  scrollTop > 70
    ? nav.classList.add("background-black")
    : nav.classList.remove("background-black");
  btnMenu.className === "fas fa-bars fa-times" ? closeMenuMobile() : "";
};
const openMenuMobile = () => {
  menumobile.classList.add("row-nav-mobile");
  btnMenu.classList.add("fa-times");
  nav.classList.add("background-black");
};
const closeMenuMobile = () => {
  menumobile.classList.remove("row-nav-mobile");
  btnMenu.classList.remove("fa-times");
  backgrounMenu();
};
btnMobile.addEventListener("click", () => {
  if (btnMenu.className === "fas fa-bars") {
    openMenuMobile();
  } else {
    closeMenuMobile();
  }
});
window.addEventListener("scroll", backgrounMenu);
window.addEventListener("load", load);
