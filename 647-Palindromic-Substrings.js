/**
 * @param {string} s
 * @return {number}
 */
var countSubstrings = function(s) {
    var length = s.length;
    var answer = 0;
    var table = new Array(length);
    for(var i = 0; i < length; i++){
        table[i] = new Array(length);
    }
    for(var i = 0; i < length; i++){
        table[i][i] = 1;
        answer += 1;
    }
    for(var i = 0; i < length - 1; i++){
        if(s[i] == s[i + 1]){
            table[i][i + 1] = 2;
            answer += 1;
        }
    }
    for(var i = length - 2; i >= 0; i--){
        for(var j = i + 1; j < length; j++){
            if(table[i + 1][j - 1] > 0 && s[i] == s[j]){
                table[i][j] = table[i + 1][j - 1] + 2;
                answer += 1;
            }
        }
    }
    console.log(table);
    return answer;
};