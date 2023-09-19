//INVIO DATI TRAMITE WHATSAPP
document.addEventListener("DOMContentLoaded", function () {
    const inviaButton = document.getElementById("inviaButtonWH");

    inviaButton.addEventListener("click", async function (event) {
        event.preventDefault();

        const nome = document.getElementById("nome").value;
        const cognome = document.getElementById("cognome").value;
        const messaggio = document.getElementById("messaggio").value;

        console.log("Dati registrati:");
        console.log("Nome:", nome);
        console.log("Cognome:", cognome);
        console.log("Messaggio:", messaggio);

        const message = 
        `Nuovo messaggio dal sito web principale:
        Nome: ${nome}
        Cognome: ${cognome}
        Messaggio: ${messaggio}`;

        const encodedMessage = encodeURIComponent(message);
        const whatsappLink = `https://wa.me/3664629084?text=${encodedMessage}`; //INSERIRE NUMERO DI TELEFONO ADEGUATO

        window.open(whatsappLink, '_blank');
    });
});
