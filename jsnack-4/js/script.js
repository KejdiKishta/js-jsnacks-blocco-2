// scrivere una funzione trovaIndice() che,
// dati un array e un elemento in input,
// restituisca la posizione in cui si trova l'elemento all'interno dell'array;
// se l'elemento non è presente nell'array, allora la funzione deve restituire -1

//* array iniziale
let array = ["pane", "latte", "burro", "cacao"];
console.log(array);

//* trova indice
let search = trovaIndice(array);
console.log(search);

//* stampo risultato
if (search === -1) {
    console.log("il tuo elemento non è presente nella lista");
} else {
    console.log(`il tuo elemento si trova nella posizione ${search}`);
}

