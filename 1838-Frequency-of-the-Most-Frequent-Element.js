/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxFrequency = function(nums, k) {
    nums.sort((a, b) => a - b);
    let ans = 1;
    let len = nums.length;
    for(let i = 0, j = 0, sum = 0; j < len; j++){
        sum += nums[j];
        while(k + sum < nums[j] * (j - i + 1)){
            sum -= nums[i];
            i++;
        }
        ans = Math.max(ans, (j - i + 1));
    }
    return ans;
};