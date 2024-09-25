/**
 * @param {string} s
 * @return {number}
 */
var minInsertions = function(s) {
    var s_len = s.length;
    var dp = new Array(s_len);
    for(var i = 0; i < s_len; i++){
        dp[i] = new Array(s_len).fill(Infinity);
        dp[i][i] = 0;
    }
    for(var i = 0; i < s_len - 1; i++){
        if(s[i] != s[i + 1]){
            dp[i][i + 1] = 1;
        }
        else{
            dp[i][i + 1] = 0;
        }
    }
    for(var i = 2; i < s_len; i++){
        for(var j = 0; j < s_len - i; j++){
            if(s[j] == s[j + i]){
                dp[j][j + i] = Math.min(dp[j][j + i], dp[j + 1][j + i - 1]);
            }
            dp[j][j + i] = Math.min(dp[j][j + i], dp[j + 1][j + i] + 1);
            dp[j][j + i] = Math.min(dp[j][j + i], dp[j][j + i - 1] + 1);
        }
    }
    //console.log(dp);
    return dp[0][s_len - 1];
};