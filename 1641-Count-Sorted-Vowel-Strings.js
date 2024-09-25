/**
 * @param {number} n
 * @return {number}
 */
var countVowelStrings = function(n) {
    let dp = new Array(5).fill(1);
    for(let i = 1; i < n; i++){
        dp[0] = dp[0];
        dp[1] = dp[1] + dp[0];
        dp[2] = dp[2] + dp[1];
        dp[3] = dp[3] + dp[2];
        dp[4] = dp[4] + dp[3];
    }
    return dp[0] + dp[1] + dp[2] + dp[3] + dp[4];
};