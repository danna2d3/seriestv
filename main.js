/*console.log("hola");
let links = document.querySelector("a");

links.forEach(function(link){
    console.log(links);
});*/

let links = document.querySelectorAll(".close");
//Recorrerlos
    links.forEach(function(link){
//Agregar un evento click a cada uno de ellos
        link.addEventListener("click",function(ev){
            ev.preventDefault();
            let content = document.querySelector(".content")
//quitar la animación
            content.classList.remove("animate__fadeInDown");
            content.classList.remove("animate__animated");
//agregar otra animación
            content.classList.add("animate__fadeOutUp");
            content.classList.add("animate__animated");
        setTimeout(function(){
            location.href="./index.html";
        },1000);

            return false;
    }); 
});