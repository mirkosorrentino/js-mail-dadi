// Generare un numero random da 1 a 6 per l'utente

// generare un numero random da 1 a 6 per il computer

// SE il numero generato per l'utente è più alto di quello generato per il computer, l'utente ha vinto; ALTRIMENTI il coputer ha vinto

const userNumber = Math.floor((Math.random() * 6) + 1);
console.log(userNumber);

const computerNumber = Math.floor((Math.random() * 6) + 1);
console.log(computerNumber);

if (userNumber > computerNumber) {
    console.log(`Il tuo numero è ${userNumber}, quello del computer è ${computerNumber}. Complimenti utente, hai vinto!`);
} else if (userNumber < computerNumber) {
    console.log(`Il tuo numero è ${userNumber}, quello del computer è ${computerNumber}. Mi dispiace, hai perso`)
} else {
    console.log(`Il tuo numero è ${userNumber}, quello del computer è ${computerNumber}. Avete pareggiato, ricarica la pagina per provare a batterlo.`);
}