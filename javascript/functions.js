var btn_mobile = document.querySelector(".btn-mobile");
var btn_menu = document.querySelector(".fas");

var lanches = document.querySelector("#lanches");
var porcoes = document.querySelector("#porcoes");
var sobremesas = document.querySelector("#sobremesas");

// button menu mobile //

btn_mobile.addEventListener("click", () => {
  menumobile.classList.toggle("row-nav-mobile");
  menumobile.classList.toggle("animation");
  btn_menu.classList.toggle("fa-times");
});

function fecharmenu() {
  menumobile.classList.remove("row-nav-mobile");
  menumobile.classList.toggle("animation");
  btn_menu.classList.toggle("fa-times");
}
// fim button menu mobile //

// button menu //

btnlanches.addEventListener("click", () => {
  lanches.classList.add("menu");
  lanches.classList.add("animation");
  porcoes.classList.remove("menu");
  porcoes.classList.remove("animation");
  sobremesas.classList.remove("menu");
  sobremesas.classList.remove("animation");
});
btnporcoes.addEventListener("click", () => {
  porcoes.classList.add("menu");
  porcoes.classList.add("animation");
  lanches.classList.remove("menu");
  lanches.classList.remove("animation");
  sobremesas.classList.remove("menu");
  sobremesas.classList.remove("animation");
});
btnsobremesas.addEventListener("click", () => {
  sobremesas.classList.add("menu");
  sobremesas.classList.add("animation");
  lanches.classList.remove("menu");
  lanches.classList.remove("animation");
  porcoes.classList.remove("menu");
  porcoes.classList.remove("animation");
});
// end buttons menu //

const sobre = document.querySelector("#sobre").offsetTop;
const cardapio = document.querySelector("#cardapio").offsetTop;
const text = document.querySelectorAll(".row-nav-desktop li .nav-text");
const icone = document.querySelector('.img-responsive-about')
console.log(icone.src)



window.addEventListener("scroll", () => {
  const scrollTop = window.pageYOffset;
  if (scrollTop >= sobre - 30) {
    text.forEach((text) => {
      text.style.color = "black";
      icone.src = 'imagens/favicon.ico'
      
    });
  }
  if (scrollTop >= cardapio - 30) {
    text.forEach((text) => {
      text.style.color = "white";
      icone.src = 'imagens/logo-revoada-branco.ico'
    });
  }
  if (scrollTop < sobre) {
    text.forEach((text) => {
      text.style.color = "white";
      icone.src = 'imagens/logo-revoada-branco.ico'
    });
  }
});
