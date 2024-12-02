/**
 * @param {string} sentence
 * @param {string} searchWord
 * @return {number}
 */
var isPrefixOfWord = function(sentence, searchWord) {
    let s = sentence.split(" ");
    for(let w in s){
        if(s[w].search(searchWord) == 0){
            return parseInt(w) + 1;
        }
    }
    return -1;
};