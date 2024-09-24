/**
 * @param {number} n
 * @return {number}
 */
var integerBreak = function(n) {
    var dp = new Array(n + 1).fill(0);
    var max = (a, b) => (a > b) ? a : b;
    dp[1] = 1;
    for(var i = 2; i < n + 1; i++){
        for(var j = 1; j < i; j++){
            dp[i] = max(dp[i], max((i - j) * j, dp[i - j] * j));
        }
    }
    return dp[n];
};