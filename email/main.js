// Chiedi all'utente la sua email,
// controlla che sia nella lista di chi può accedere,
// stampa un messaggio appropriato sull'esito del controllo.

// input element
const inputButtonEl = document.getElementById("button_send");
const inputEmailUserEl = document.getElementById("email_user");
const welcomeMessageEl = document.getElementById("welcome_user");

// email list
const emailList = [
    "mariorossi@gmail.com",
    "gigibiachi@gmail.com",
    "franconeri@gmail.com",
    "gigiferri@gmail.com",
]


inputButtonEl.addEventListener(
    "click",
    function () {
        let emailFound = false;
        let outputMessage;
        const emailUser = inputEmailUserEl.value;

        for (let i = 0; i < emailList.length; i++) {
            const currentEmail = emailList[i];

            if (emailUser === currentEmail) {
                emailFound = true;
            }
        }

        if (emailFound) {
            outputMessage = `Benvenuto, ${emailUser}`;
        }
        else {
            outputMessage = `Accesso negato, inserire una nuova email`;
        }

        welcomeMessageEl.innerHTML = outputMessage;
    }

)




