// Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
// Stabilire il vincitore, in base a chi fa il punteggio più alto.


let pcChosenNumber = Math.floor(Math.random() * 6);
console.log(`il numero del pc è:${pcChosenNumber}`);

let playerChosenNumber = Math.floor(Math.random() * 6);
console.log(`il numero del player1 è:${playerChosenNumber}`);

if (pcChosenNumber > playerChosenNumber) {
    outputMessage = `il vincitore è il Pc`
}
else if (playerChosenNumber == pcChosenNumber) {
    outputMessage = `il risultato è pari`
}
else {
    outputMessage = `il vincitore è player1`
}

console.log(outputMessage);



