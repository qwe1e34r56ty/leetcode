/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canPartition = function(nums) {
    var dst = 0;
    for(var i = 0; i < nums.length; i++){
        dst += nums[i];
    }
    dst = dst / 2;
    if(Math.floor(dst) != dst){
        return false;
    }
    var dp = new Array(nums.length);
    for(var i = 0; i < nums.length; i++){
        dp[i] = new Array(dst + 1).fill(0);
    }
    dp[0][0] = 1;
    dp[0][nums[0]] = 1;
    for(var i = 1; i < nums.length; i++){
        dp[i][0] = 1;
        for(var j = 0; j < dst + 1; j++){
            if(dp[i - 1][j] == 1){
                dp[i][j + nums[i]] = 1;
                dp[i][j] = 1
                if(j + nums[i] == dst || j == dst){
                    return true;
                }
            }
        }
    }
    return false;
};