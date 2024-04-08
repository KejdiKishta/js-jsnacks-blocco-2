// scrivere una funzione stampa() che,
// dato un array in input, 
// restituisca una stringa contenente tutti gli elementi dell'array, 
// separati da una virgola

//* funzione input utente
const input = inputElem();
console.log(input);

//* stampa array
const finalResult = stampaArray (input);

//* stampa risultato finale
alert(`gli elementi presenti nell'array sono ${finalResult}`)
