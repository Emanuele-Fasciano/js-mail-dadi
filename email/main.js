// Chiedi all'utente la sua email,
// controlla che sia nella lista di chi può accedere,
// stampa un messaggio appropriato sull'esito del controllo.

const emailUser = prompt("digiti la sua email")
// console.log(emailUser);

const emailList = [
    "mariorossi@gmail.com",
    "gigibiachi@gmail.com",
    "franconeri@gmail.com",
    "gigiferri@gmail.com",
]

let emailFound = false;

for (let i = 0; i < emailList.length; i++) {
    const currentEmail = emailList[i]

    if (emailUser === currentEmail) {
        emailFound = true;
    }
}

if (emailFound) {
    console.log(`benvenuto${emailUser}`);
}
else {
    console.log(`accesso negato`);
}

