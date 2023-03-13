// chiedere all'utente la mail
// Dato il mio array di email consentite, verificare che l'email che mi dà l'utente sia tra quelle nella lista di email che possono accedere

const verifiedEmails = ["mirkosorrentino@gmail.com", "mirko.sorrentino@gmail.com", "mirkosorrentino6454@gmail.com", "mirko.sorrentino6454@gmail.com"];
console.log(verifiedEmails);

const userEmail= prompt("Inserisci la tua email affinchè il sistema possa verificare che tu sia abilitato ad accedere:");
console.log(userEmail);

let valid = false;

for (let i = 0; i < verifiedEmails.length; i++) {
    const currentEmail = verifiedEmails[i];

    if (currentEmail.toLowerCase() === userEmail.toLowerCase()) {
        valid = true;
    }
}

if (valid === true) {
    console.log(`La tua email fa parte delle email verificate, puoi procedere`);
} else {
    console.log(`Siamo spiacenti ma l'email ${userEmail} non fa parte della lista di email verificate`);
}
