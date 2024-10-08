// script.js

// Funzione per controllare se l'elemento è visibile nella finestra
function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return rect.top >= 0 && rect.left >= 0 &&
           rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
           rect.right <= (window.innerWidth || document.documentElement.clientWidth);
}

// Funzione per avviare il video in autoplay e mettere in muto
function playVideoWhenInView() {
    const videoContainer = document.getElementById('video-container');
    const videoIframe = document.getElementById('video');

    // Verifica se l'elemento è visibile
    if (isElementInViewport(videoContainer)) {
        // Cambia la URL per fare in modo che il video parta con autoplay
        const videoSrc = videoIframe.src;
        if (!videoSrc.includes('autoplay=1')) {
            videoIframe.src = videoSrc.replace('autoplay=0', 'autoplay=1') + '&mute=1';
        }
    }
}

// Verifica continuamente se il video è visibile
window.addEventListener('scroll', playVideoWhenInView);
