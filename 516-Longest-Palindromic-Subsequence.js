/**
 * @param {string} s
 * @return {number}
 */
var longestPalindromeSubseq = function(s) {
    var s_len = s.length;
    var dp = new Array(s_len);
    for(var i = 0; i < s_len; i++){
        dp[i] = new Array(s_len).fill(0);
    }
    for(var i = 0; i < s_len; i++){
        dp[i][i] = 1;
    }
    for(var i = 0; i < s_len - 1; i++){
        if(s[i] == s[i + 1]){
            dp[i][i + 1] = 2;
        }
        else{
            dp[i][i + 1] = 1;
        }
    }
    for(var i = 2; i < s_len; i++){
        for(var j = 0; j < s_len - i; j++){
            if(s[j] == s[j + i]){
                dp[j][j + i] = dp[j + 1][j + i - 1] + 2;
            }
            else{
                dp[j][j + i] = Math.max(Math.max(dp[j][j + i - 1], dp[j + 1][j + i]), dp[j + 1][j + i - 1]);
            }
        }
    }
    return dp[0][s_len - 1];
};