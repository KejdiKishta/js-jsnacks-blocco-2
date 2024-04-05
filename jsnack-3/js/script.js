// scrivere una funzione contaElementi() che, dato un array in input, restituisca il numero di elementi presenti nell'array

// //* array vuoto
// let array = [];

// //* chiedo input all'utente
// for (let i = 0; i < 5; i++) {
//     let input = prompt ("Ciao, dimmi 5 elementi da inserire nella tua lista");
//     //* li inserisco nell'array
//     array.push(input)
// }

//* funzione input utente
const input = inputElem();

//* stampo array
console.log(input);

//* contatore di elementi
const contElem = contatoreElem (input);

//* stampa
console.log("il numero di elementi nella lista è " + contElem);
