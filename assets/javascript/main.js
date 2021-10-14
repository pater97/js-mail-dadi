//CONSEGNA:
/*
MAIL -->
- Chiedi all’utente la sua email,
- controlla che sia nella lista di chi può accedere,
- stampa un messaggio appropriato sull’esito del controllo.
DADI -->
- generare un numero random da 1 a 6, sia per l'utente che per il pc
- stabilire il vincitore in base al punteggio più alto.
BONUS -->
- usare un input e un bottone per inserire la mail per poi mostrare i contenuti sulla pagina
*/

//COSA FARE:
/*
MAIL:
- 1 creare un Array con la lista di e-mail abilitate all'accesso.
- 2 chiedere attraverso un prompt all'utente di inserire la sua e-mail per il confronto
- 3 definire le variabili di inserimento in html
- 4 tramite l'uso delle condizioni: se la mail è all'interno dell'Arrey allora fare apparire un messaggio di conferma, altrimenti no.
*/

//1
const approvateUser = ["tizio.caio@gmail.com", "pinco.pallino@gmail.com", "lorem.ipsum@gmail.com", "mario.rossi@gmail.com"];
console.log(approvateUser); //test
//2
const emailUser = prompt(`qual'è la tua email?`)
//3
const message = document.querySelector(".message")
//4 

if (approvateUser == emailUser) {
    let answer = `congratulazioni la tua e-mail è abilitata.`
    message.innerHTML = answer
} else {
    let answer = `la tua e-mail non è abilitata`
    message.innerHTML = answer
}
