/**
 * @param {string} s
 * @return {number}
 */
var strangePrinter = function(s) {
    var s_len = s.length;
    var dp = new Array(s_len);
    var tmp = 0;
    for(var i = 0; i < s_len; i++){
        dp[i] = new Array(s_len).fill(Infinity);
    }
    for(var i = 0; i < s_len; i++){
        dp[i][i] = 1;
    }
    for(var i = 1; i < s_len; i++){
        for(var j = 0; j < s_len - i; j++){
            dp[j][j + i] = i + 1;
            for(var k = 0; k < i; k++){
                tmp = dp[j][j + k] + dp[j + k + 1][j + i];
                if(s[j + k] == s[j + i]) tmp--;
                dp[j][j + i] = Math.min(dp[j][j + i], tmp);
            }
        }
    }
    return dp[0][s_len - 1];
};