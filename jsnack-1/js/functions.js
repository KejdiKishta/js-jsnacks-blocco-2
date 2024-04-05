/**
 * Description array di 10 numeri random
 * @returns {Array}
 */
function generateArray () {
    let nArray = [];

    for (let i = 0; i < 10; i++) {
        let rndNum = getRndInteger (1, 100);

        nArray.push(rndNum);
    }
    return nArray;
}

/**
 * Description random numbers
 * @param {number} min
 * @param {number} max
 * @returns {number}
 */
function getRndInteger (min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
}

/**
 * Description print array
 * @param {array} arrayToPrint
 */
function printArray (arrayToPrint) {
    const result = document.getElementById("result");
    console.log(result);
    
    result.innerHTML += `<li>${arrayToPrint}</li>`
} 