/**
 * @param {number} n
 * @return {number}
 */
var countVowelPermutation = function(n) {
    let a = 0, e = 1, i = 2, o = 3, u = 4;
    let mod = Math.pow(10, 9) + 7;
    let dp = new Array(n);
    for(let i = 0; i < n; i++){
        dp[i] = new Array(5);
    }
    dp[0][a] = 1;
    dp[0][e] = 1;
    dp[0][i] = 1;
    dp[0][o] = 1;
    dp[0][u] = 1;
    for(let j = 1; j < n; j++){
        dp[j][a] = (dp[j - 1][e] + dp[j - 1][u] + dp[j - 1][i]) % mod;
        dp[j][e] = (dp[j - 1][a] + dp[j - 1][i]) % mod;
        dp[j][i] = (dp[j - 1][e] + dp[j - 1][o]) % mod;
        dp[j][o] = (dp[j - 1][i]) % mod;
        dp[j][u] = (dp[j - 1][i] + dp[j - 1][o]) % mod;
    }
    return (dp[n - 1][a] + dp[n - 1][e] + dp[n - 1][i] + dp[n - 1][o] + dp[n - 1][u]) % mod;
};