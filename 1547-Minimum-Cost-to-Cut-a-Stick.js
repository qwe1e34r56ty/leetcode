/**
 * @param {number} n
 * @param {number[]} cuts
 * @return {number}
 */
var minCost = function(n, cuts) {
    var cut_len = cuts.length;
    var memo = new Array(cut_len + 2);
    for(var i = 0; i < cut_len + 2; i++){
        memo[i] = new Array(cut_len + 2).fill(-1);
    }
    cuts = [0].concat(cuts.sort(function(a, b){ return a - b }));
    cuts.push(n);
    return dp(0, cut_len + 1);
    function dp(start, end){
        var ret = Infinity;
        if(memo[start][end] != -1){
            ret = memo[start][end];
            return ret;
        }
        if(start + 1 == end){
            ret = cuts[end] - cuts[start];
            memo[start][end] = 0;
            return 0;
        }
        for(var i = start + 1; i < end; i++){
            ret = Math.min(ret, dp(start, i) + dp(i, end));
        }
        ret += cuts[end] - cuts[start];
        memo[start][end] = ret;
        return ret;
    }
}