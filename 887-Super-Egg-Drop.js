/**
 * @param {number} k
 * @param {number} n
 * @return {number}
 */
var superEggDrop = function(K, n) {
    var dp = new Array(K + 1).fill(0);
    var m;
    for(m = 0; dp[K] < n; m++){
        for(var k = K; k > 0; k--){
            dp[k] += 1 + dp[k - 1];
        }
    }
    return m;
};