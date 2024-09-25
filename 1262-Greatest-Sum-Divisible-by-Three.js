/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSumDivThree = function(nums) {
    var dp = new Array(nums.length);
    for(var i = 0; i < nums.length; i++){
        dp[i] = new Array(6).fill(0);
    }
    dp[0][nums[0] % 3] = nums[0];
    for(var i = 1; i < nums.length; i++){
        for(var j = 0; j < 6; j++){
            dp[i][j] = dp[i - 1][j];
        }
        dp[i][nums[i] % 3] = Math.max(dp[i][nums[i] % 3], nums[i]);
        for(var j = 0; j < 6; j++){
            if(dp[i - 1][j] != 0){
                dp[i][(j + nums[i]) % 3] = Math.max(dp[i][(j + nums[i]) % 3], dp[i - 1][j] + nums[i]);
            }
        }
    }
    //console.log(dp);
    return dp[nums.length - 1][0];
};