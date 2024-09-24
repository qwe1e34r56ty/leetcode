/**
 * @param {number} target
 * @return {number}
 */
var racecar = function(target) {
    var dp = new Array(target + 1).fill(Infinity);
    dp[0] = 0;
    for(var i = 1; (1 << i) - 1 <= target; i++){
        dp[(1 << i) - 1] = i;
    }
    for(var i = 1; i <= target; i++){
        var j = 1;
        for(; (1 << j) <= i; j++);
        dp[i] = Math.min(dp[i], dp[(1 << j) - 1 - i] + j + 1);
        for(var k = 0; k < j - 1; k++){
            dp[i] = Math.min(dp[i], dp[i - (1 << (j - 1)) + (1 << k)] + k + j + 1);
            /*console.log(i + ", " + j + ", " + k);
            console.log(i - (1 << (j - 1)) + (1 << k));
            console.log(dp[i - (1 << (j - 1)) + (1 << k)]);
            console.log(dp[i]);*/
        }
    }
    //console.log(dp);
    return dp[target];
};