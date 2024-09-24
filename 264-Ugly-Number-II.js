/**
 * @param {number} n
 * @return {number}
 */
var nthUglyNumber = function(n) {
    var dp = new Array(n + 1);
    dp[1] = 1;
    var tmp = Number.MAX_SAFE_INTEGER;
    var min = (a, b) => (a < b) ? a : b;
    for(var i = 2; i < n + 1; i++){
        for(var j = 1; j < i; j++){
            if(dp[j] * 2 > dp[i - 1]){
                tmp = min(tmp, dp[j] * 2);
            }
            if(dp[j] * 3 > dp[i - 1]){
                tmp = min(tmp, dp[j] * 3);
            }
            if(dp[j] * 5 > dp[i - 1]){
                tmp = min(tmp, dp[j] * 5);
            }
        }
        dp[i] = tmp;
        tmp = Number.MAX_SAFE_INTEGER;
    }
    console.log(dp);
    return dp[n];
};