/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var combinationSum4 = function(nums, target) {
    var table = new Array(nums.length).fill(0);
    var dp = new Array(target + 1).fill(0);
    for(var i = 0; i < nums.length; i++){
        table[i] = nums[i];
    }
    dp[0] = 1;
    for(var i = 1; i < target + 1; i++){
        for(var j = 0; j <= nums.length; j++){
            if(table[j] <= i){
                dp[i] += (table[j] > 0) * dp[i - table[j]];
            }
        }
    }
    console.log(table);
    console.log(dp);
    return dp[target];
};