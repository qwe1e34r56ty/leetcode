/**
 * @param {number[]} stoneValue
 * @return {string}
 */
var stoneGameIII = function(stoneValue) {
    var stone_len = stoneValue.length;
    var memo = new Array(stone_len).fill(-Infinity);
    var answer = "";
    dp(0);
    if(memo[0] > 0){
        answer = "Alice";
    }
    else if(memo[0] < 0){
        answer = "Bob";
    }
    else{
        answer = "Tie";
    }
    return answer;
    function dp(i){
        var ret = -Infinity;
        if(i >= stone_len){
            return 0;
        }
        if(memo[i] != -Infinity){
            return memo[i];
        }
        for(var j = 0, tmp = 0; j < 3 && i + j < stone_len; j++){
            for(var k = 0; k <= j; k++){
                tmp += stoneValue[i + k];
            }
            ret = Math.max(ret, tmp - dp(i + j + 1));
            tmp = 0;
        }
        memo[i] = ret;
        return ret;
    }
};