/**
 * @param {number[]} piles
 * @return {boolean}
 */
var stoneGame = function(piles) {
    var pile_len = piles.length;
    var memo = new Array(pile_len);
    var answer = undefined;
    for(var i = 0; i < pile_len; i++){
        memo[i] = new Array(pile_len).fill(-Infinity);
    }
    dp(0, pile_len - 1);
    if(memo[0][pile_len - 1] > 0){
        answer = true;
    }
    else{
        answer = false;
    }
    return answer;
    function dp(i, j){
        var ret = -Infinity;
        if(i > j){
            return 0;
        }
        if(memo[i][j] != -Infinity){
            ret = memo[i][j];
            return ret;
        }
        ret = Math.max(ret, piles[i] - dp(i + 1, j));
        ret = Math.max(ret, piles[j] - dp(i, j - 1));
        memo[i][j] = ret;
        return ret;
    }
};