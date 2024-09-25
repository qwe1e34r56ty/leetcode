/**
 * @param {number} d
 * @param {number} f
 * @param {number} target
 * @return {number}
 */
var numRollsToTarget = function(d, f, target) {
    var dp = new Array(target + 1).fill(0);
    var mod = Math.pow(10, 9) + 7;
    for(var i = 1; i <= f; i++){
        dp[i] = 1;
    }
    for(var i = 1; i < d; i++){
        for(var j = target; j > 0; j--){
            dp[j] = 0;
            for(var k = 1; k <= f && k <= j; k++){
                dp[j] += dp[j - k];
                dp[j] %= mod;
            }
        }
    }
    //console.log(dp);
    return dp[target];
};