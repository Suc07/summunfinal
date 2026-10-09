var botonMenu = document.querySelector(".menu-toggle");
var menu = document.querySelector(".main-nav");


// ABRIR Y CERRAR EL MENÚ
botonMenu.addEventListener("click", function() {

    if (menu.classList.contains("open")) {

        menu.classList.remove("open");

    } else {

        menu.classList.add("open");

    }

});


// CERRAR EL MENÚ AL SELECCIONAR UNA OPCIÓN
var enlaces = document.querySelectorAll(".main-nav a");

for (var i = 0; i < enlaces.length; i++) {

    enlaces[i].addEventListener("click", function() {

        menu.classList.remove("open");

    });

}


// MOSTRAR EL AÑO ACTUAL EN EL PIE DE PÁGINA
var año = new Date().getFullYear();
var añoPagina = document.getElementById("year");

if (añoPagina) {

    añoPagina.textContent = año;

}
