/**
 * @param {string[]} words
 * @return {number}
 */
var maxProduct = function(words) {
    var len = words.length;
    var memo = new Array(len).fill(0);
    var answer = 0;
    for(var i = 0; i < len; i++){
        for(var j = 0, word_len = words[i].length; j < word_len; j++){
            memo[i] |= 1 << (words[i][j].charCodeAt() - 97);
        }
    }
    for(var i = 0; i < len; i++){
        for(var j = i + 1; j < len; j++){
            if(!(memo[i] & memo[j])){
                answer = Math.max(answer, words[i].length * words[j].length);
            }
        }
    }
    //console.log(memo);
    return answer;
};