/**
 * @param {string[]} strs
 * @return {number}
 */
var minDeletionSize = function(strs) {
    let row = strs.length;
    let column = strs[0].length;
    let dp = new Array(column).fill(1);
    for(let i = 1; i < column; i++){
        for(let j = 0, tmp = 1; j < i; j++){
            for(let k = 0; k < row; k++){
                if(strs[k][i].charCodeAt() < strs[k][j].charCodeAt()){
                    tmp = 0;
                    break;
                }
            }
            if(tmp){
                dp[i] = Math.max(dp[i], dp[j] + 1);
            }
            tmp = 1;
        }
    }
    let answer = column - 1;
    for(let i = 0; i < column; i++){
        answer = Math.min(answer, column - dp[i]);
    }
    console.log(dp);
    return answer;
};