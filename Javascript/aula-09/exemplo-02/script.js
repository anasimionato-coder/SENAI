let titulo = document.querySelector("h1");
let btnAtivar = document.querySelector(".btnAtivar");
let btnDesativar = document.querySelector(".btnDesativar");

btnAtivar.addEventListener("click", function(){
    titulo.classList.add("is-active")
})

btnDesativar.addEventListener("click", function(){
    titulo.classList.remove("is-active")
})