/**
 * @param {number[]} stones
 * @return {number}
 */
var stoneGameVIII = function(stones) {
    var stone_len = stones.length;
    var prefix = new Array(stone_len);
    prefix[0] = stones[0];
    for(var i = 1; i < stone_len; i++){
        prefix[i] = prefix[i - 1] + stones[i];
    }
    var dp = new Array(stone_len);
    dp[stone_len - 1] = prefix[stone_len - 1];
    for(var i = stone_len - 2; i > 0; i--){
        dp[i] = Math.max(prefix[i] - dp[i + 1], dp[i + 1]);
    }
    //console.log(dp);
    return dp[1];
};