/**
 * @param {number[]} stones
 * @param {number} K
 * @return {number}
 */
var mergeStones = function(stones, K) {
    var stones_len = stones.length;
    var memo = new Array(stones_len);
    for(var i = 0; i < stones_len; i++){
        memo[i] = new Array(stones_len);
        for(var j = 0; j < stones_len; j++){
            memo[i][j] = new Array(K + 1).fill(Infinity);
        }
        memo[i][i][1] = 0;
    }
    var prefix = new Array(stones_len + 1).fill(0);
    for(var i = 1; i < stones_len + 1; i++){
        prefix[i] = prefix[i - 1] + stones[i - 1];
    }
    function dp(i, j, m){
        var ret = Infinity;
        if(memo[i][j][m] != Infinity){
            ret = memo[i][j][m];
            return ret;
        }
        if(i == j){
            ret = memo[i][j][m];
            return ret;
        }
        if(m == 1){
            ret = dp(i, j, K) + prefix[j + 1] - prefix[i];
        }
        else{
            for(var mid = i + 1; mid <= j; mid += K - 1){
                ret = Math.min(ret, dp(i, mid - 1, 1) + dp(mid, j, m - 1));
            }
        }
        memo[i][j][m] = ret;
        return ret;
    }
    dp(0, stones_len - 1, 1);
    if(memo[0][stones_len - 1][1] == Infinity){
        return -1;
    }
    return memo[0][stones_len - 1][1];
}