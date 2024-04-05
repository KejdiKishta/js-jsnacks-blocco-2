/**
 * Description input per l'utente
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
 * Description devo contare gli elementi presenti in un array
 * @param {array} list
 * @returns {number}
 */
function contatoreElem (list) {
    let contList = 0;

    for(let i = 0; i < list.length; i++) {
        contList++;
    }

    return contList;
}
