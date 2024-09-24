/**
 * @param {number[]} nums
 * @return {boolean}
 */
var PredictTheWinner = function(nums) {
    var len = nums.length;
    var answer = null;
    var memo = new Array(len);
    for(var i = 0; i < len; i++){
        memo[i] = new Array(len).fill(-Infinity);
    }
    dp(0, len - 1);
    if(memo[0][len - 1] >= 0){
        answer = true;
    }
    else{
        answer =  false;
    }
    return answer;
    
    function dp(i, j){
        if(i > j){
            return 0;
        }
        if(memo[i][j] != -Infinity){
            return memo[i][j];
        }
        var ret = -Infinity;
        ret = Math.max(ret, nums[i] - dp(i + 1, j));
        ret = Math.max(ret, nums[j] - dp(i, j - 1));
        memo[i][j] = ret;
        return ret;
    }
};