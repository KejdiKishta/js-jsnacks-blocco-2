/**
 * Description funzione per trovare un elemento uguale all'input nella lista e stampare la sua posizione
 * @param {Array} list
 * @returns {number}
 */
function trovaIndice(list) {
    //* input utente
    const userSearch = prompt("scrivi un elemento e ti dirò se è presente nella lista")
    console.log(userSearch);

    //* controllo
    // let num = -1;

    for (let i = 0; i < list.length; i++) {
        if (userSearch === list[i]) {
            return i;
        } 
    }
    return -1
}
