/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
var numDistinct = function(s, t) {
    var dp = new Array(s.length + 1);
    for(var i = 0; i < s.length + 1; i++){
        dp[i] = new Array(t.length + 1);
        for(var j = 0; j < t.length + 1; j++){
            dp[i][j] = 0;
        }
    }
    for(var i = 0; i < s.length + 1; i++){
        dp[i][0] = 1;
    }
    for(var i = 1; i < t.length + 1; i++){
        for(var j = 1; j < s.length + 1; j++){
            dp[j][i] = (dp[j - 1][i - 1] != 0 && s[j - 1] == t[i - 1]) ? dp[j - 1][i - 1] : 0;
            dp[j][i] += dp[j - 1][i];
        }
    }
    return dp[s.length][t.length];
}