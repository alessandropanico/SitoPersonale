if (window.innerWidth <= 768) {
    // Disabilita AOS su dispositivi mobili
    AOS.init({
        disable: true
    });
    // Rimuovi attributi data-aos dagli elementi problematici
    var elementsToRemoveAOS = document.querySelectorAll('[data-aos]');
    elementsToRemoveAOS.forEach(function (element) {
        element.removeAttribute('data-aos');
    });
}
