
/* =========================================
   UN PEQUEÑO UNIVERSO PARA TI
   JAVASCRIPT
========================================= */


/* =========================================
   1. MENSAJES SECRETOS
========================================= */

const mensajesSecretos = {

    rosa: {
        icono: "✿",
        titulo: "Una pequeña flor",
        mensaje: "Te amo así como amo a Spider-Man."
    },

    luna: {
        icono: "☾",
        titulo: "Bajo la misma luna",
        mensaje: "Amo ver tus ojos."
    },

    corazon: {
        icono: "♡",
        titulo: "Un pedacito de mi corazón",
        mensaje: "Amo tu forma de expresar cariño."
    },

    musica: {
        icono: "♫",
        titulo: "Nuestra pequeña melodía",
        mensaje: "Hay pequeños detalles tuyos que siempre consiguen sacarme una sonrisa."
    }

};


/* =========================================
   2. ELEMENTOS DE LA PÁGINA
========================================= */

const botonesObjetos = document.querySelectorAll(".object-button");

const contadorDescubiertos = document.getElementById("found-count");
const contadorTotal = document.getElementById("total-count");
const barraProgreso = document.getElementById("progress-fill");


/* VENTANA DE MENSAJES */

const ventanaMensaje = document.getElementById("message-modal");
const iconoMensaje = document.getElementById("modal-icon");
const tituloMensaje = document.getElementById("modal-title");
const textoMensaje = document.getElementById("modal-message");

const botonCerrarMensaje = document.getElementById("close-modal");
const botonContinuar = document.getElementById("continue-button");


/* SECCIONES */

const botonAbrirCarta = document.getElementById("open-letter");

const seccionInicio = document.getElementById("home");
const seccionCarta = document.getElementById("letter-section");
const piePagina = document.getElementById("footer");


/* ELEMENTOS DE LA CARTA */

const tituloPagina = document.getElementById("page-heading");
const contenidoPagina = document.getElementById("page-content");
const firmaCarta = document.getElementById("page-signature");

const papelCarta = document.querySelector(".letter-paper");


/* NAVEGACIÓN */

const botonPaginaAnterior = document.getElementById("previous-page");
const botonPaginaSiguiente = document.getElementById("next-page");

const numeroPagina = document.getElementById("page-number");
const botonRegresar = document.getElementById("back-home");


/* =========================================
   3. OBJETOS DESCUBIERTOS
========================================= */

const objetosDescubiertos = new Set();

contadorTotal.textContent = Object.keys(mensajesSecretos).length;


/* =========================================
   4. ACTUALIZAR CONTADOR
========================================= */

function actualizarProgreso() {

    const descubiertos = objetosDescubiertos.size;

    const total = Object.keys(mensajesSecretos).length;

    contadorDescubiertos.textContent = descubiertos;

    barraProgreso.style.width =
        `${(descubiertos / total) * 100}%`;

}


/* =========================================
   5. MOSTRAR MENSAJE SECRETO
========================================= */

function mostrarMensaje(id) {

    const mensaje = mensajesSecretos[id];

    if (!mensaje) return;

    iconoMensaje.textContent = mensaje.icono;

    tituloMensaje.textContent = mensaje.titulo;

    textoMensaje.textContent = mensaje.mensaje;

    ventanaMensaje.classList.remove("hidden");


    if (!objetosDescubiertos.has(id)) {

        objetosDescubiertos.add(id);

        actualizarProgreso();

    }

}


/* =========================================
   6. CERRAR MENSAJE SECRETO
========================================= */

function cerrarMensaje() {

    ventanaMensaje.classList.add("hidden");

}


/* =========================================
   7. EVENTOS DE LOS OBJETOS
========================================= */

botonesObjetos.forEach(boton => {

    boton.addEventListener("click", () => {

        const id = boton.dataset.id;

        mostrarMensaje(id);

    });

});


botonCerrarMensaje.addEventListener(
    "click",
    cerrarMensaje
);


botonContinuar.addEventListener(
    "click",
    cerrarMensaje
);


ventanaMensaje.addEventListener("click", evento => {

    if (evento.target === ventanaMensaje) {

        cerrarMensaje();

    }

});


document.addEventListener("keydown", evento => {

    if (evento.key === "Escape") {

        cerrarMensaje();

    }

});


/* =========================================
   8. TU CARTA PERSONAL
========================================= */

/*
    Cada bloque representa una página.
    Tus palabras se conservan.
    Puedes agregar más páginas cuando quieras.
*/


const paginasCarta = [

    /* PRIMERA PÁGINA */

    {
        titulo: "Primera página",

        contenido: `Quiero comenzar esta carta diciendote lo mucho, pero lo mucho que aprecio tus detalles. Neta que cada que vez son mejores que los anteriores y a me da penita porque no es como que sea el chico perfecto. Pero para ti trataré de serlo siempre a veces me siento tan estupido por tantas veces que he fallado, pero que sepas que ante estos ojitos solo tú eres la chica con la que quiero compartir mi tiempo siempre.`
    },


    /* SEGUNDA PÁGINA */

    {
        titulo: "Segunda página",

        contenido: `Quizás nunca se lo dije, pero el motivo de que yo terminara con usted no fue por lo que disque me dijeron, es que yo sentía que estaba por meterla en problemas y mi reacción fue alejarme. Estar sin ti me hacía mucho daño, te extrañe cada dia y en mis pensamientos solo estabas tú, la realidad es que quiero estar siempre contigo, en las buenas y en las malas y que siempre podamos resolver cualquier problema juntos. Te amo con todo mi corazoncito mi tica, mi chiquita mi pequeña artista, mi mini lana del rey.`
    },


    /* TERCERA PÁGINA */

    {
        titulo: "Última página",

        contenido: `Quiero finalizar diciendote que no importa el tiempo que estemos lejos, siempre seras tu y esperaré con ansias por verte y nose quizás y me escapo para verte Te amo con todo mi ser, tu olor ya esta grabado en mi memoria, tus abrazos y besos son como tatuajes porque ya forman parte de mi y me van a hacer falta durante este tiempo. Como ya te he dicho muchas veces, te amo tres millones. Nada apagará esto que siento y espero estemos juntos tu y yo siempre, aprecio cada detalle y cada frase que me das te amo con el alma. De parte de tu tiquii espero te guste amoichitoo.`
    }

];


/* =========================================
   9. CONFIGURACIÓN DE LA CARTA
========================================= */

let paginaActual = 0;


/* =========================================
   10. ANIMACIÓN DE CAMBIO DE PÁGINA
========================================= */

function animarCambioPagina() {

    papelCarta.classList.remove("page-turn");

    void papelCarta.offsetWidth;

    papelCarta.classList.add("page-turn");

}


/* =========================================
   11. MOSTRAR UNA PÁGINA
========================================= */

function mostrarPagina(indice) {

    if (indice < 0 || indice >= paginasCarta.length) {
        return;
    }

    paginaActual = indice;

    const pagina = paginasCarta[paginaActual];


    // Mostrar título y contenido

    tituloPagina.textContent = pagina.titulo;

    contenidoPagina.textContent = pagina.contenido;


    // Animar la hoja completa

    animarCambioPagina();


    // Actualizar número de página

    numeroPagina.textContent =
        `${paginaActual + 1} / ${paginasCarta.length}`;


    // Botón anterior

    botonPaginaAnterior.disabled = paginaActual === 0;


    // Botón siguiente

    if (paginaActual === paginasCarta.length - 1) {

        botonPaginaSiguiente.textContent = "Finalizar ♡";

    } else {

        botonPaginaSiguiente.textContent = "Siguiente →";

    }


    // Firma solamente en la última página

    if (paginaActual === paginasCarta.length - 1) {

        firmaCarta.classList.remove("hidden");

    } else {

        firmaCarta.classList.add("hidden");

    }


    // Regresar al comienzo de la carta

    seccionCarta.scrollIntoView({
        behavior: "smooth",
        block: "start"
    });

}


/* =========================================
   12. ABRIR LA CARTA
========================================= */

function abrirCarta() {

    seccionInicio.classList.add("hidden");

    piePagina.classList.add("hidden");

    seccionCarta.classList.remove("hidden");

    mostrarPagina(0);

}


botonAbrirCarta.addEventListener(
    "click",
    abrirCarta
);


/* =========================================
   13. SIGUIENTE PÁGINA
========================================= */

botonPaginaSiguiente.addEventListener("click", () => {

    if (paginaActual < paginasCarta.length - 1) {

        mostrarPagina(paginaActual + 1);

    } else {

        cerrarCarta();

    }

});


/* =========================================
   14. PÁGINA ANTERIOR
========================================= */

botonPaginaAnterior.addEventListener("click", () => {

    if (paginaActual > 0) {

        mostrarPagina(paginaActual - 1);

    }

});


/* =========================================
   15. CERRAR LA CARTA
========================================= */

function cerrarCarta() {

    seccionCarta.classList.add("hidden");

    seccionInicio.classList.remove("hidden");

    piePagina.classList.remove("hidden");


    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

}


botonRegresar.addEventListener(
    "click",
    cerrarCarta
);


/* =========================================
   16. INICIAR PROYECTO
========================================= */

actualizarProgreso();

// Preparar la primera página sin mostrarla todavía
mostrarPagina(0);

// Mostrar únicamente la bienvenida
seccionInicio.classList.remove("hidden");

seccionCarta.classList.add("hidden");

piePagina.classList.remove("hidden");

