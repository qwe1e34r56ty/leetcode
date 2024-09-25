/**
 * @param {number[]} nums
 * @return {number}
 */
var longestArithSeqLength = function(nums) {
    let len = nums.length;
    let dp = new Array(len);
    for(let i = 0; i < len; i++){
        dp[i] = new Array(1001).fill(1);
    }
    let ans = 1;
    for(let i = 1; i < len; i++){
        for(let j = 0; j < i; j++){
            dp[i][nums[i] - nums[j] + 500] = Math.max(dp[i][nums[i] - nums[j] + 500], dp[j][nums[i] - nums[j] + 500] + 1);
            ans = Math.max(ans, dp[i][nums[i] - nums[j] + 500]);
        }
    }
    //console.log(dp);
    return ans;
};