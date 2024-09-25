/**
 * @param {string} dominoes
 * @return {string}
 */
var pushDominoes = function(dominoes) {
    var len = dominoes.length;
    var left = new Array(len).fill(0);
    var right = new Array(len).fill(0);
    var answer = [];
    var cur = 0;
    var pull = 0;
    var tmp = 0;
    {
    for(var i = 0; i < len; i++){
        if(dominoes[i] == 'R'){
            pull = 1;
            cur = 0;
        }
        else if(dominoes[i] == 'L'){
            pull = 0;
            cur = 0;
        }
        if(pull == 1){
            cur++;
            right[i] = cur;
        }
    }
    pull = 0;
    cur = 0;
    for(var i = len - 1; i >= 0; i--){
        if(dominoes[i] == 'L'){
            pull = 1;
            cur = 0;
        }
        else if(dominoes[i] == 'R'){
            pull = 0;
            cur = 0;
        }
        if(pull == 1){
            cur++;
            left[i] = cur;
        }
    }
    }
    for(var i = 0; i < len; i++){
        if(dominoes[i] == '.'){
            if(left[i] == 0){
                if(right[i] != 0){
                    tmp = 'R';
                }
                else{
                    tmp = '.';
                }
            }
            else if(right[i] == 0){
                if(left[i] != 0){
                    tmp = 'L';
                }
                else{
                    tmp = '.';
                }
            }
            else{
                if(left[i] < right[i]){
                    tmp = 'L';
                }
                else if(right[i] < left[i]){
                    tmp = 'R';
                }
                else{
                    tmp = '.';
                }
            }
            answer.push(tmp);
        }
        else{
            answer.push(dominoes[i]);
        }
    }
    return answer.join("");
};