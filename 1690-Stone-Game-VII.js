/**
 * @param {number[]} stones
 * @return {number}
 */
var stoneGameVII = function(stones) {
    var stone_len = stones.length;
    var memo = new Array(stone_len);
    for(var i = 0; i < stone_len; i++){
        memo[i] = new Array(stone_len).fill(-1);
    }
    var prefix = new Array(stone_len);
    prefix[0] = stones[0];
    for(var i = 1; i < stone_len; i++){
        prefix[i] = prefix[i - 1] + stones[i];
    }
    return dp(0, stone_len - 1);
    function dp(i, j){
        var ret = memo[i][j];
        if(ret != - 1){
            return ret;
        }
        if(i == j){
            ret = 0;
        }
        else {
            ret = prefix[j - 1] - ((i > 0) ? prefix[i - 1] : 0) - dp(i, j - 1);
            ret = Math.max(ret, prefix[j] - prefix[i] - dp(i + 1, j));
        }
        memo[i][j] = ret;
        return ret;
    }
};