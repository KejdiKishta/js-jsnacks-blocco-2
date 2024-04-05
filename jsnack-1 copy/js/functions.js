/**
 * Description
 * @param {string} word1
 * @param {string} word2
 * @returns {boolean}
 */
function controlLength (word1, word2) {
    let flag = false;

    if (word1.length === word2.length) {
        flag = true
    }
    console.log(flag);
    return flag
}

/**
 * Description
 * @param {string} word1
 * @param {string} word2
 */
function print (word1, word2) {
    if (controlLength === true) {
        console.log(word1, word2);
    } else {
        if (word1.length > word2.length) {
            console.log(word1);
        } else {
            console.log(word2);
        }
    }
}
