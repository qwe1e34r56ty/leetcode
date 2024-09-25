/**
 * @param {number} steps
 * @param {number} arrLen
 * @return {number}
 */
var numWays = function(steps, arrLen) {
    var dp = new Array(steps + 1);
    arrLen = Math.min(501, arrLen);
    var mod = Math.pow(10, 9) + 7;
    for(var i = 0; i < steps + 1; i++){
        dp[i] = new Array(arrLen).fill(0);
    }
    dp[0][0] = 1;
    for(var i = 1; i < steps + 1; i++){
        for(var j = 0; j < arrLen; j++){
            for(var k = Math.max(0, j - 1); k < Math.min(arrLen, j + 2); k++){
                dp[i][j] += dp[i - 1][k];
                dp[i][j] %= mod;
            }
        }
    }
    //console.log(dp);
    return dp[steps][0];
};