/**
 * @param {string} s
 * @return {number}
 */
var distinctSubseqII = function(s) {
    var s_len = s.length;
    var answer = 0;
    var mod = Math.pow(10, 9) + 7;
    var dp = new Array(s_len);
    for(var i = 0; i < s_len; i++){
        dp[i] = new Array(s_len).fill(0);
    }
    var table = new Array(s_len);
    for(var i = 0; i < s_len; i++){
        table[i] = new Array(26).fill(0);
    }
    dp[0][0] = 1;
    table[0][s.charCodeAt(0) - 97] = 1;
    for(var i = 1; i < s_len; i++){
        dp[0][i] = dp[0][i - 1] - table[0][s.charCodeAt(i) - 97] + 1;
        table[0][s.charCodeAt(i) - 97] = 1;
    }
    answer += dp[0][s_len - 1];
    for(var i = 1; i < s_len; i++){
        for(var j = i; j < s_len; j++){
            dp[i][j] = dp[i][j - 1] - table[i][s.charCodeAt(j) - 97] + dp[i - 1][j - 1];
            dp[i][j] %= mod;
            table[i][s.charCodeAt(j) - 97] = dp[i - 1][j - 1];
        }
        answer += dp[i][s_len - 1];
        answer %= mod;
    }
    //console.log(dp);
    return answer;
};