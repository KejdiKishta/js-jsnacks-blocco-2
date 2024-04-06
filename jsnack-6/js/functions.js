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

function rimuoviDallaCoda(array) {
    //* risultato da mettere nel return
    let result = [];

    // //* ciclo while che pusha tutti gli elementi dell'array A tranne l'ultimo
    // let i = 0
    // while (i < array.length - 1) {
    //     result.push(array[i]);
    //     i++
    // }

    //* ciclo for che pusha tutti gli elementi dell'array A tranne l'ultimo
    for (let i = 0; i < (array.length - 1); i++) {
        result.push(array[i]);
    }

    console.log(result);
    return result;
}