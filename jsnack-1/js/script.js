//* input utente
const n = parseInt(prompt("Ciao! Dimmi un numero"));
console.log(n);

//* finche raggiungi n crea array per ogni numero e stampalo
for (let i = 0; i < n; i++) {
    //* creo array
    let newArray = generateArray();
    console.log(newArray);
    //* stampo array
    printArray(newArray)
}