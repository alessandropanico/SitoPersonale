


//------------------------------------------------------------

// Funzione per rimuovere l'indicazione visiva dagli altri link del menu
//PULSANTI ROSSI
// Ottieni tutti i link di navigazione
const navLinks = document.getElementsByClassName("navLink");

// Aggiungi l'evento di click a ciascun link
Array.from(navLinks).forEach(link => {
  link.addEventListener("click", function(event) {
    // Rimuovi la classe "active" da tutti i link
    Array.from(navLinks).forEach(lnk => {
      lnk.classList.remove("red");
    });

    // Aggiungi la classe "active" al link cliccato
    this.classList.add("red");
  });
});

// Verifica la pagina attiva al caricamento della pagina
document.addEventListener("DOMContentLoaded", function() {
  // Ottieni l'URL della pagina corrente
  const currentURL = window.location.href;

  // Trova il link corrispondente alla pagina corrente e aggiungi la classe "active"
  Array.from(navLinks).forEach(link => {
    // Confronta solo l'URL di base senza parametri di query
    if (link.href.split("?")[0] === currentURL.split("?")[0]) {
      link.classList.add("red");
    }
  });
});

//------------------------------------------------------------

//PAGINE
function chiSono(){
    window.location.href="./pagine/chisono.html"
}

function Dio(){
  window.location.href="Dio.html";
}

function contattami(){
  window.location.href="contatti.html"
}


//------------------------------------------------------------


// Funzione per controllare lo stato della navbar in base allo scrolling
// Funzione per controllare lo stato della navbar in base allo scrolling
// Variabile per tenere traccia dell'ultima posizione di scroll
var lastScrollPos = 0;

// Funzione per gestire lo scrolling
function handleScroll() {
    var navbar = document.getElementById("navbar");
    var scrollY = window.scrollY || window.pageYOffset;

    // Nascondi la navbar quando si scorre verso il basso
    if (scrollY > lastScrollPos) {
        navbar.style.opacity = "0"; // Imposta l'opacità a 0 per nascondere la navbar
        navbar.style.pointerEvents = "none"; // Disabilita i pulsanti
    } else {
        navbar.style.opacity = "1"; // Ripristina l'opacità a 1 per mostrare la navbar
        navbar.style.pointerEvents = "auto"; // Abilita i pulsanti
    }

    // Aggiorna la posizione di scroll
    lastScrollPos = scrollY;
}

// Aggiungi un listener per lo scrolling
window.addEventListener("scroll", handleScroll);

// Chiamata alla funzione quando la pagina si carica
window.addEventListener("load", handleScroll);








//---
AOS.init();