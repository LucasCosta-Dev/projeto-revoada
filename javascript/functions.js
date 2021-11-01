var lanches = document.querySelector(".lanches");
var porcoes = document.querySelector(".porcoes");
var sobremesas = document.querySelector(".sobremesas");

function btnlanches() {
  if (lanches.style.display === "none") {
    lanches.style.display = "flex";
    porcoes.style.display = "none";
    sobremesas.style.display = "none";
  }else{
    porcoes.style.display = "none"
  }
}
function btnporcoes() {
  if (porcoes.style.display === "none") {
    lanches.style.display = "none";
    porcoes.style.display = "flex";
    sobremesas.style.display = "none";
  }
}
function btnsobremesas() {
  if (sobremesas.style.display === "none") {
    lanches.style.display = "none";
    porcoes.style.display = "none";
    sobremesas.style.display = "flex";
  }
}
