var btn_mobile = document.querySelector(".btn-mobile");
var btn_menu = document.querySelector(".fas")


var lanches = document.querySelector("#lanches");
var porcoes = document.querySelector("#porcoes");
var sobremesas = document.querySelector("#sobremesas");

// button menu mobile //

btn_mobile.addEventListener('click' , () =>{
  menumobile.classList.toggle('row-nav-mobile')
  menumobile.classList.toggle('animation')
  btn_menu.classList.toggle('fa-times')
  
})

function fecharmenu(){
  menumobile.classList.remove('row-nav-mobile')
  menumobile.classList.toggle('animation')
  btn_menu.classList.toggle('fa-times')
  
}
// fim button menu mobile //

// button menu //

btnlanches.addEventListener('click' , () =>{
  lanches.classList.add('menu')
  lanches.classList.add('animation')
  porcoes.classList.remove('menu')
  porcoes.classList.remove('animation')
  sobremesas.classList.remove('menu')
  sobremesas.classList.remove('animation')

})
btnporcoes.addEventListener('click' , () =>{
  porcoes.classList.add('menu')
  porcoes.classList.add('animation')
  lanches.classList.remove('menu')
  lanches.classList.remove('animation')
  sobremesas.classList.remove('menu')
  sobremesas.classList.remove('animation')

})
btnsobremesas.addEventListener('click' , () =>{
  sobremesas.classList.add('menu')
  sobremesas.classList.add('animation')
  lanches.classList.remove('menu')
  lanches.classList.remove('animation')
  porcoes.classList.remove('menu')
  porcoes.classList.remove('animation')

})
// end buttons menu //