/**
 * @param {number[][]} accounts
 * @return {number}
 */
var maximumWealth = function(accounts) {
    var answer = 0;
    for(var i = 0, tmp = 0; i < accounts.length; i++){
        for(var j = 0; j < accounts[i].length; j++){
            tmp += accounts[i][j];
        }
        answer = Math.max(answer, tmp);
        tmp = 0;
    }
    return answer;
};