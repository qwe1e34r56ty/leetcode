/**
 * @param {number} num
 * @return {number[]}
 */
var countBits = function(num) {
    var dp = new Array(num + 1);
    var cur = 0;
    dp[0] = 0;
    for(var i = 1; i < num + 1; i *= 2){
        dp[i] = 1;
    }
    for(var i = 1; i < num + 1; i++){
        if(dp[i] == 1){
            cur = i;
            continue;
        }
        else{
            dp[i] = 1 + dp[i - cur];
        }
    }
    return dp;
};