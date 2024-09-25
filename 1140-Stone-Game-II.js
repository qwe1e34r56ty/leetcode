/**
 * @param {number[]} piles
 * @return {number}
 */
var stoneGameII = function(piles) {
    var M = 1;
    var piles_len = piles.length;
    var memo = new Array(piles_len);
    var prefix = new Array(piles_len + 1);
    for(var i = 0; i < piles_len; i++){
        memo[i] = new Array(piles_len * 2).fill(-Infinity);
    }
    prefix[0] = 0;
    for(var i = 1; i < piles_len + 1; i++){
        prefix[i] = prefix[i - 1] + piles[i - 1];
    }
    //console.log(prefix);
    dp(0, 1);
    //console.log(memo);
    //return 10;
    return (prefix[piles_len] - memo[0][1]) / 2 + memo[0][1];
    function dp(i, M){
        var ret = -Infinity;
        if(i >= piles_len){
            ret = 0;
            return ret;
        }
        if(memo[i][M] != -Infinity){
            ret = memo[i][M];
            return ret;
        }
        for(var j = 0; j <= Math.min(piles_len - i - 1, 2 * M - 1); j++){
            //console.log(prefix[i + j + 1] - prefix[i] + ", " + i + ", " + j);
            ret = Math.max(ret, prefix[i + j + 1] - prefix[i] - dp(i + j + 1, Math.max(j + 1, M)));
        }
        memo[i][M] = ret;
        //console.log(ret);
        return ret;        
    }
};