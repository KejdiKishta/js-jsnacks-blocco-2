/**
 * Description
 * @returns {array}
 */
function inputElem () {
   //* array vuoto
    let array = [];

   //* chiedo input all'utente
    for (let i = 0; i < 5; i++) {
    let input = prompt ("Ciao, dimmi 5 elementi da inserire nella tua lista");
       //* li inserisco nell'array
    array.push(input)
    }

return array;
}

/**
 * Description
 * @param {array} array
 * @returns {string}
 */
function stampaArray (array) {
    //* risultato
    let result = "";
    //* ciclo for che stampa in result il risultato
    for (let i = 0; i < array.length; i++){
        //* ciclo if per togliere la virgola all'ultimo elemento
        if (i === array.length - 1) {
            result += array[i];
        } else {
            result += `${array[i]}, `;
        }
        console.log(array[i]);
    }
    //* stampa risultato finale
    alert(`gli elementi presenti nell'array sono ${result}`)
}
