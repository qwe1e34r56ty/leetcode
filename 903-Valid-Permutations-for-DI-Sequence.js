/**
 * @param {string} s
 * @return {number}
 */
var numPermsDISequence = function(s) {
    let len = s.length;
    let mod = Math.pow(10, 9) + 7;
    let dp = new Array(len + 1);
    for(let i = 0; i < len + 1; i++){
        dp[i] = new Array(len + 1).fill(0);
        dp[0][i] = 1;
    }
    for(let i = 0; i < len; i++){
        if(s[i] == "D"){
            dp[i + 1][len - i - 1] = dp[i][len - i];
            for(let j = len - i - 2; j >= 0; j--){
                dp[i + 1][j] = dp[i + 1][j + 1] + dp[i][j + 1];
                dp[i + 1][j] %= mod;
            }
        }
        else{
            dp[i + 1][0] = dp[i][0];
            for(let j = 1; j < len - i; j++){
                dp[i + 1][j] = dp[i + 1][j - 1] + dp[i][j];
                dp[i + 1][j] %= mod;
            }
        }
    }
    //console.log(dp);
    return dp[len][0];
};