let boton = document.querySelector(".botonWhatsapp");
let chat = document.querySelector(".contenedor");
let botonCerrar = document.querySelector(".exit");

boton.addEventListener("click", ()=>{
    boton.classList.add("ocultar");
    chat.classList.remove("ocultar");
})
botonCerrar.addEventListener("click",()=>{
    chat.classList.add("ocultar");
    boton.classList.remove("ocultar");
})