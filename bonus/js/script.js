// scrivere una funzione inserisciInTesta() che,
// dati un array A e un elemento E in input,
// resituisca un nuovo array B, 
// con E in prima posizione e a seguire tutti gli elementi di A

//* funzione input utente
const input = inputElem();
console.log(input);

//* prompt che chiede elemento da aggiungere in testa
const newElem = prompt("dimmi un elemento da aggiungere in cima alla lista");
input.push(newElem)
console.log(newElem);

//* funzione inserisce in testa
const orederedArray = inserisciInTesta (input);
console.log(orederedArray);