/**
 * @param {string[]} words
 * @param {character[]} letters
 * @param {number[]} score
 * @return {number}
 */
var maxScoreWords = function(words, letters, score) {
    let words_len = words.length;
    let letters_len = letters.length;
    let answer = 0;
    let memo = new Array(1 << words_len);
    for(let i = 0; i < (1 << words_len); i++){
        memo[i] = new Array(26).fill(0);
    }
    let letters_memo = new Array(26).fill(0);
    for(let i = 0; i < letters_len; i++){
        letters_memo[letters[i].charCodeAt() - 97]++;
    }
    for(let i = 0; i < (1 << words_len); i++){
        for(let j = 0; j < words_len; j++){
            if(i & (1 << j)){
                for(let k = 0, word_len = words[j].length; k < word_len; k++){
                    memo[i][words[j].charCodeAt(k) - 97]++;
                }
            }
        }
    }
    for(let i = 0, tmp = 0; i < (1 << words_len); i++){
        for(let j = 0; j < 26; j++){
            if(memo[i][j] <= letters_memo[j]){
                tmp += score[j] * memo[i][j];
            }
            else{
                tmp = 0;
                break;
            }
        }
        answer = Math.max(answer, tmp);
        tmp = 0;
    }
    return answer;
};