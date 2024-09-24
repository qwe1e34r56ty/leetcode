/**
 * @param {number[]} nums
 * @return {number}
 */
var answer;
var max = (a, b) => (a > b ) ? a : b;

var maxCoins = function(nums) {
    nums = [1].concat(nums).concat([1]);
    answer = new Array(nums.length);
    for(var i = 0; i < nums.length; i++){
        answer[i] = new Array(nums.length);
    }
    /*============================================================*/
    for(var i = 0; i < nums.length; i++){
        for(var j = 0; j < nums.length; j++){
            answer[i][j] = -1;
        }
    }
    /*============================================================*/
    return dp(0, nums.length - 1, nums);
};

function dp(i, j, nums){
    var ret;
    if(i + 1 == j){
        return 0;
    }
    if(answer[i][j] != -1){
        ret = answer[i][j];
        return ret;
    }
    for(var k = i + 1; k < j; k++){
        ret = max(ret, dp(i, k, nums) + nums[i] * nums[k] * nums[j] + dp(k, j, nums));
    }
    answer[i][j] = ret;
    return ret;
}