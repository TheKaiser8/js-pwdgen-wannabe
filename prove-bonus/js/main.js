"use-strict";

// BONUS 1
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

// BONUS 2
// 8. Chiedi all'utente la sua età
const age = Number ( prompt("Inserisci la tua età"));
// 9. Crea una variabile password low-safety che si ottiene dalla concatenazione di nome, cognome ed età
const passwordLow = `${firstName}${lastName}${favoriteColor}${age}`;
// 10. Stampa in console la password ottenuta
console.log(passwordLow);
// 11. Stampa sulla pagina HTML la password low-safety generata
document.querySelector(".pwd-text.low-safety").innerHTML = passwordLow;
// 12. Crea una variabile password medium-safety che si ottiene dalla concatenazione di nome, cognome e numero classe + età
const passwordMedium = `${firstName}${lastName}${favoriteColor}${classNumber + age}`;
// 13. Stampa in console la password medium-safety ottenuta
console.log(passwordMedium);
// 14. Stampa sulla pagina HTML la password medium-safety generata
document.querySelector(".pwd-text.medium-safety").innerHTML = passwordMedium;
// 15. Chiedi all'utente di inserire uno dei seguenti caratteri speciali: - / & % $ #
const specialCharacter = prompt("Inserisci uno dei seguenti caratteri speciali: - / & % $ #");
// 16. Crea una variabile password medium-safety che si ottiene dalla concatenazione di nome, cognome, carattere speciale e numero classe + età
const passwordHigh = `${firstName}${lastName}${favoriteColor}${specialCharacter}${classNumber + age}`;
// 17. Stampa in console la password high-safety ottenuta
console.log(passwordHigh);
// 18. Stampa sulla pagina HTML la password medium-safety generata
document.querySelector(".pwd-text.high-safety").innerHTML = passwordHigh;