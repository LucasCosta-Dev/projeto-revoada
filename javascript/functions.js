var btn_menu_mobile = document.querySelector(".row-nav-mobile");
var btn_mobile = document.querySelector(".btn-mobile");

var btnlanches = document.querySelector('#btnlanches')
var btnporcoes = document.querySelector('#btnporcoes')
var btnsobremesas = document.querySelector('#btnsobremesas')

var lanches = document.querySelector(".lanches");
var porcoes = document.querySelector(".porcoes");
var sobremesas = document.querySelector(".sobremesas");

// button menu mobile //
btn_mobile.addEventListener("click", function () {
  if (btn_menu_mobile.style.display === "block") {
    btn_menu_mobile.style.display = "none";
    btn_menu_mobile.style.opacity = "0";
  } else {
    btn_menu_mobile.style.display = "block";
    btn_menu_mobile.style.opacity = "1";
  }
});
btn_menu_mobile.addEventListener("click", function () {
  btn_menu_mobile.style.display = "none";
});
// end button menu mobile //

// buttons menu //

btnlanches.addEventListener('click', function(){
  
  if(lanches.style.display === 'flex'){
    porcoes.style.display = "none";
    sobremesas.style.display = "none";
  }else{
    lanches.style.display = 'flex';
    porcoes.style.display = "none";
    sobremesas.style.display = "none";
  }
})
btnporcoes.addEventListener('click', function(){
  
  if(porcoes.style.display === 'flex'){
    lanches.style.display = "none";
    sobremesas.style.display = "none";
  }else{
    porcoes.style.display = 'flex';
    lanches.style.display = "none";
    sobremesas.style.display = "none";
  }

})
btnsobremesas.addEventListener('click', function(){
  
  if(sobremesas.style.display === 'flex'){
    porcoes.style.display = "none";
    lanches.style.display = "none";
  }else{
    sobremesas.style.display = 'flex';
    porcoes.style.display = "none";
    lanches.style.display = "none";
  }

})
// end buttons menu //
