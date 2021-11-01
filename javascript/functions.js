var btnmenu = document.querySelector(".row-nav-mobile")

function menumobile(){

  if(btnmenu.style.display === "block"){
    btnmenu.style.display = "none"
  }else{
    btnmenu.style.display = "block"
  }

}

var lanches = document.querySelector(".lanches");
var porcoes = document.querySelector(".porcoes");
var sobremesas = document.querySelector(".sobremesas");

function btnlanches() {
  if (lanches.style.display = "none") {
    lanches.style.display = "flex"; 
    porcoes.style.display = "none";
    sobremesas.style.display = "none";   
  }
}
function btnporcoes() {
  if (porcoes.style.display = "none") {
    porcoes.style.display = "flex";
    lanches.style.display = "none";
    sobremesas.style.display = "none"

  }
}
function btnsobremesas() {
  if (sobremesas.style.display = "none") {
    sobremesas.style.display = "flex";
    lanches.style.display = "none";
    porcoes.style.display = "none";
  }
}
