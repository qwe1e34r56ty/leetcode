/**
 * @param {number[]} nums
 * @return {number}
 */
var dp;
var maxProduct = function(nums) {
    var max;
    dp = new Array(nums.length);
    for(var i = 0; i < nums.length; i++){
        dp[i] = new Array(2);
    }
    if(nums.length == 0){
        return 0;
    }
    dp[0][0] = (nums[0] > 0) ? nums[0] : 0;
    dp[0][1] = (nums[0] < 0) ? nums[0] : 0;
    max = nums[0];
    for(var i = 1; i < nums.length; i++){
        dp[i][0] = (nums[i] > 0) ? ((nums[i] > nums[i] * dp[i - 1][0]) ? nums[i] : nums[i] * dp[i - 1][0]) : ((nums[i] * dp[i - 1][1] > 0) ? nums[i] * dp[i - 1][1] : 0);
        dp[i][1] = (nums[i] < 0) ? ((nums[i] < nums[i] * dp[i - 1][0]) ? nums[i] : nums[i] * dp[i - 1][0]) : ((nums[i] * dp[i - 1][1] < 0) ? nums[i] * dp[i - 1][1] : 0);
        max = (max > dp[i][0]) ? max : dp[i][0];
    }
    return max;    
};