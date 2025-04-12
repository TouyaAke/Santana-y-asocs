document.querySelector(".bars__menu").addEventListener("click", animateBars);

document.querySelector(".bars__menu").addEventListener("click", abrirCerrarMenu);

var line1__bars = document.querySelector(".line1__bars-menu");

var line2__bars = document.querySelector(".line2__bars-menu");

var line3__bars = document.querySelector(".line3__bars-menu");

function animateBars() {
    line1__bars.classList.toggle("activeLine1__bars-menu");
    line2__bars.classList.toggle("activeLine2__bars-menu");
    line3__bars.classList.toggle("activeLine3__bars-menu");
}

var nav = document.querySelector(".nav");

function abrirCerrarMenu() {
    nav.classList.toggle("menu");
}

window.addEventListener("scroll", ponerFondo);

function ponerFondo() {
    var header = document.querySelector(".Header");
    header.classList.add("HeaderAbajo", this.window.scrollY > 0);
}
let lastScrollY = 0; // Almacena la última posición del scroll
window.addEventListener("scroll", ocultarHeader);
function ocultarHeader() {

    const header = document.querySelector(".HeaderAbajo");
    const currentScrollY = window.scrollY;

    if (currentScrollY > lastScrollY) {
        // Scroll hacia abajo: ocultar header
        header.classList.add("HeaderOculto");
        header.classList.remove("HeaderVisible");
    } else {
        // Scroll hacia arriba: mostrar header
        header.classList.remove("HeaderOculto");
        header.classList.add("HeaderVisible");
    }

    // Fondo transparente al llegar al tope
    if (currentScrollY === 0) {
        header.classList.add("HeaderTransparente");
    } else {
        header.classList.remove("HeaderTransparente");
    }

    lastScrollY = currentScrollY;

};