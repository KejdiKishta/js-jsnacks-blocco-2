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

function rimuoviDallaTesta(array) {
    //* risultato da mettere nel return
    let result = [];

    //* ciclo for che pusha tutti gli elementi dell'array A tranne il primo
    for (let i = 0; i < array.length; i++) {
        if (i !== 0) {
            result.push(array[i]);
        }
    }

    console.log(result);
    return result;
}