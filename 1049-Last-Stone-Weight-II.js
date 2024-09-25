/**
 * @param {number[]} stones
 * @return {number}
 */
var lastStoneWeightII = function(stones) {
    var sum = 0;
    var stones_len = stones.length;
    for(var i = 0; i < stones_len; i++){
        sum += stones[i];
    }
    var dp = new Array(sum + 1).fill(0);
    for(var i = 0; i < stones_len; i++){
        for(var j = sum; j >= stones[i]; j--){
            dp[j] = Math.max(dp[j], dp[j - stones[i]] + stones[i]);
        }
    }
    //console.log(dp);
    return sum - 2 * dp[sum >> 1];
};