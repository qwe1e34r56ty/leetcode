/**
 * @param {number[]} nums
 * @return {boolean}
 */
var splitArraySameAverage = function(nums) {
    let len = nums.length;
    let sum = 0;
    for(let i = 0; i < len; i++){
        sum += nums[i];
    }
    let dp = new Array(sum + 1).fill(0);
    for(let i = 0; i < len; i++){
        for(let j = sum; j >= nums[i]; j--){
            dp[j] |= dp[j - nums[i]] << 1;
        }
        dp[nums[i]] |= 1;
    }
    for(let i = 0; i < len - 1; i++){
        if(dp[sum * (i + 1) / len] & (1 << i)){
            return true;
        }
    }
    return false;
};