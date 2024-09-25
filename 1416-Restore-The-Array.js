/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var numberOfArrays = function(s, k) {
    var mod = Math.pow(10, 9) + 7;
    var s_len = s.length;
    var dp = new Array(s_len + 1).fill(0);
    dp[s_len] = 1;
    for(var i = s_len - 1; i >= 0; i--){
        if(s[i] == 0){
            continue;
        }
        for(var j = 1, tmp = 0; i + j <= s_len; j++){
            tmp *= 10;
            tmp += s.charCodeAt(i + j - 1) - 48;
            if(tmp > k){
                break;
            }
            dp[i] = (dp[i] + dp[i + j]) % mod;
        }
    }
    //console.log(dp);
    //console.log(answer);
    return dp[0];
};