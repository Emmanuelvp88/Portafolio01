

// Codigo para aparecer una clase para el mover el NAV
window.addEventListener("scroll", function () {
    var divbar = this.document.querySelector("nav>div");
    divbar.classList.toggle("abajo", window.scrollY > 0);
});

// Codigo para aparecer el menu con el boton Movile
const buttonBars = document.querySelector(".buttonBars");
const navLinks = document.querySelector(".nav-links");

buttonBars.addEventListener("click", () => {
    navLinks.classList.toggle("nav-links_active");
});
navLinks.addEventListener("click", () => {
    navLinks.classList.toggle("nav-links_active");
});


window.addEventListener('scroll', function (){
    const icono = document.getElementById('icono');

    if((window.innerHeight + window.scrollY) >= document.body.offsetHeight){
        icono.classList.add('en-bottom');
    }
    else{
        icono.classList.remove('en-bottom');
    }
});

// Codigo para el Scroll

// $(document).ready(function(){
//     var ir_a = $(".desplazar");

//     ir_a.click(function(evento){
//         evento.preventDefault();
//         $("body, html").animate(
//             {
//             scrollTop: $(this.hash).offset().top,
//             }, 800,
//         );
//     })
// })


// ${document}.ready( () =>{
//     alert("asuduoasoo");
// });


//     window.addEventListener('scroll', function() {
//     const icono = document.getElementById('icono');
//     // Verifica si ya llegaste al fondo
//     if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
//         icono.classList.add('en-bottom'); // Le agrega la clase para cambiar el color
//     } else {
//         icono.classList.remove('en-bottom'); // Se la quita si no estás en el fondo
//     }
//   });


