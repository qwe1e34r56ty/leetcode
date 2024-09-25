/**
 * @param {number} n
 * @return {boolean}
 */
var winnerSquareGame = function(n) {
    var dp = new Array(n + 1).fill(0);
    for(var i = 0; i < n + 1; i++){
        if(dp[i]){
            continue;
        }
        for(var k = 1; i + k * k <= n; k++){
            dp[i + k * k] = true;
        }
    }
    return dp[n];
};