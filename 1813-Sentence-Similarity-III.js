/**
 * @param {string} sentence1
 * @param {string} sentence2
 * @return {boolean}
 */
var areSentencesSimilar = function(sentence1, sentence2) {
    let s1 = sentence1, s2 = sentence2;
    let tmp;
    if(s1.length > s2.length){
        tmp = s1;
        s1 = s2;
        s2 = tmp;
    }
    s1 = s1.split(" ");
    s2 = s2.split(" ");
    return solve(s1, s2) || solve(s1.reverse(), s2.reverse());
};

var solve = function(s1, s2){
    let i = 0;
    let j = 0;
    let empty = 0;
    let state = 0;
    let ret = 0;
    while(i < s1.length && j < s2.length){
        if(s1[i] != s2[j]){
            j++;
            if(state == 0){
                empty += 1;
                state = 1;
            }
        }
        else{
            i++;
            j++;
            if(state == 1){
                state = 0;
            }
        }
    }
    if(i == s1.length && empty < 2 && (j == s2.length || empty == 0)){
        return true;
    }
    return false;
}