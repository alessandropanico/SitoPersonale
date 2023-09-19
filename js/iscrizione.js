document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("moduloIscrizione").addEventListener("submit", function (e) {
        e.preventDefault(); // Evita l'invio del modulo predefinito
 
        // Recupera i dati dal modulo
        var nome = document.getElementById("nomeIscrizione").value;
        var cognome = document.getElementById("cognomeIscrizione").value;
        var email = document.getElementById("emailIscrizione").value;
 
        // Imposta la chiave API di Mailchimp e l'ID della lista
        var apiKey = "823746ca82dfc512d44c29c32a1d155d-us12";
        var listId = "f9d2bf28c4";
 
        // Costruisci l'URL per l'API di Mailchimp utilizzando la chiave API e l'ID della lista
        var url = "https://" + apiKey.split("-")[1] + ".api.mailchimp.com/3.0/lists/" + listId + "/members";
 
        // Effettua una richiesta AJAX per inviare i dati al servizio di newsletter (Mailchimp)
        // Puoi utilizzare fetch() o altre librerie AJAX come Axios per questo scopo
        // Assicurati di includere la tua chiave API nell'header dell'autenticazione
 
        // Esempio con fetch()
        fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer " + apiKey
            },
            body: JSON.stringify({
                email_address: email,
                status: "subscribed",
                merge_fields: {
                    FNAME: nome,
                    LNAME: cognome
                }
            }),
        })
            .then(function (response) {
                if (response.ok) {
                    console.log("Grazie per esserti iscritto!");
                } else {
                    console.error("Errore nell'iscrizione:", response.status);
                }
            })
            .catch(function (error) {
                console.error("Errore nella richiesta:", error);
            });
    });
 });
 