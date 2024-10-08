/**
 * @param {string} s
 * @return {number}
 */
var minFlipsMonoIncr = function(s) {
    let len = s.length;
    let dp = new Array(len);
    for(let i = 0; i < len; i++){
        dp[i] = new Array(2).fill(0);
    }
    dp[0][0] += s[0] != "0";
    dp[0][1] += s[0] != "1";
    for(let i = 1; i < len; i++){
        dp[i][0] += dp[i - 1][0] + (s[i] != "0");
        dp[i][1] += Math.min(dp[i - 1][0], dp[i - 1][1]) + (s[i] != "1");
    }
    //console.log(dp);
    return Math.min(dp[len - 1][0], dp[len - 1][1]);
};