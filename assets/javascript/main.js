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
- 3 definire le variabili di inserimento in html e la variabile sentinella
- 4 fare ciclare l'array
- 5 stabilire con una variabile sentinella il valore vero o falso in base a se l'email cercata è presente
- 6 inserire il messaggio in html
*/

//1
const approvateUser = ["tizio.caio@gmail.com", "pinco.pallino@gmail.com", "lorem.ipsum@gmail.com", "mario.rossi@gmail.com"];
//2
const emailUser = prompt(`qual'è la tua email?`)
//3
const message = document.querySelector(".message")
let find = false
//4
for (let i = 0; i < approvateUser.length; i++) {
    if (approvateUser[i] == emailUser) { //5
        find = true
    }
}
//6
if (find == true) {
    message.innerHTML = `la tua e-mail è abilitata`
} else {
    message.innerHTML = `la tua e-mail non è abilitata`
}




//COSA FARE: 
/* 
DADI
- 1 definire le variabili per il numero del pc e dell'utente con i relativi numeri 
- 2 inserire quest'ultimi nell'html
- 3 definire il vincitore con una condizione
*/
//1
const pcNumber = Math.floor(Math.random() * 5) + 1;
const userNumber = Math.floor(Math.random() * 5) + 1;
const result = document.querySelector(".result")
//2
document.querySelector(`.pcNumber`).innerHTML = pcNumber
document.querySelector(`.userNumber`).innerHTML = userNumber
//3
if (pcNumber > userNumber) {
    let win = (`il mio numero è più alto, ho vinto`)
    result.innerHTML = win
} else {
    let win = (`congratulazioni, il tuo numero è più alto, hai vinto!`)
    result.innerHTML = win
}

