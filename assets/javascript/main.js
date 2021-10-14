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
- 3 tramite l'uso delle condizioni: se la mail è all'interno dell'Arrey allora fare apparire un messaggio di conferma, altrimenti no.
*/

const approvateUser = ["tizio.caio@gmail.com", "pinco.pallino@gmail.com", "lorem.ipsum@gmail.com", "mario.rossi@gmail.com"];
console.log(approvateUser);