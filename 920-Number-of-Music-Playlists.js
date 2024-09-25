/**
 * @param {number} N
 * @param {number} L
 * @param {number} K
 * @return {number}
 */
var numMusicPlaylists = function(N, L, K) {
    var dp = new Array(N + 1);
    for(var i = 0; i <= N; i++){
        dp[i] = new Array(L + 1).fill(0);
    }
    dp[0][0] = 1;
    for(var i = 1; i <= N; i++){
        for(var j = 1; j <= L; j++){
            dp[i][j] += dp[i - 1][j - 1] * i;
            dp[i][j] += dp[i][j - 1] * Math.max(i - K, 0);
            dp[i][j] %= Math.pow(10, 9) + 7
        }
    }
    console.log(dp);
    return dp[N][L];
};