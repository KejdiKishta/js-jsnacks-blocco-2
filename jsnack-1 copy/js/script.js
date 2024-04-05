// Esercizio 2
// Dare la possibilità di inserire due parole.
// Verificare tramite una funzione che le due parole abbiano la stessa lunghezza.
// Se hanno la stessa lunghezza, stamparle entrambe altrimenti stampare la più lunga delle due.

//* input di 2 parole
const userWord = prompt("Dimmi una parola");
const userWord2 = prompt("Dimmi un'altra parola");

let control = controlLength(userWord, userWord2);

print(userWord, userWord2);