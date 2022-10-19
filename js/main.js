"use-strict";

// 1. Chiedi all'utente il suo nome
const firstName = prompt("Inserisci il tuo nome");
// 2. Chiedi all'utente il suo cognome
const lastName = prompt("Inserisci il tuo cognome");
// 3. Chiedi all'utente il suo colore preferito
const favoriteColor = prompt("Scrivi il tuo colore preferito");
// 4. Crea una variabile password che si ottiene dalla concatenazione dei 3 dati aquisiti precedentemente
const password = `${firstName}${lastName}${favoriteColor}`;
// 5. Stampa in console la password ottenuta
console.log(password);
// 6. Stampa sulla pagina HTML la password generata
document.querySelector(".pwd-text").innerHTML = password;