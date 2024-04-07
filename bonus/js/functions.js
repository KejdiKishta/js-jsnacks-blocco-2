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
 * @returns {array}
 */
function inserisciInTesta(array) {
    //* appoggio
    let result = [];

    //* ciclo for che pusha l'ultimo elemento
    for (let i = array.length - 1; i >= 0; i--) {
        let curElem = array[i];
        result.push(curElem);
        break;
    }

    //* ciclo for che pusha i restanti elementi
    for (let j = 0; j < array.length - 1; j++) {
        result.push(array[j]);
    }
    return result;
}