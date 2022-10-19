"use-strict";

// 1. Chiedi all'utente il suo nome
const firstName = prompt("Inserisci il tuo nome");
// 2. Chiedi all'utente il suo cognome
const lastName = prompt("Inserisci il tuo cognome");
// 3. Chiedi all'utente il suo colore preferito
const favoriteColor = prompt("Scrivi il tuo colore preferito");
// 4. Chiedi all'utente la sua classe di appartenenza
const classNumber = Number ( prompt("Scrivi il numero della tua classe di appartenenza") );
// 5. Crea una variabile password che si ottiene dalla concatenazione dei 4 dati aquisiti precedentemente
const password = `${firstName}${lastName}${favoriteColor}${classNumber}`;
// 6. Stampa in console la password ottenuta
console.log(password);
// 7. Stampa sulla pagina HTML la password generata
document.querySelector(".pwd-text").innerHTML = password;