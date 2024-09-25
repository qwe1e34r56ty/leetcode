/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maximumScore = function(nums, k) {
    let len = nums.length;
    let ans = nums[k];
    for(let i = k, j = k, min = nums[k]; !(i == 0 && j == len - 1);){
        if(i == 0){
            j++;
            min = Math.min(min, nums[j]);
        }
        else if(j == len - 1){
            i--;
            min = Math.min(min, nums[i]);
        }
        else{
            if(nums[i - 1] > nums[j + 1]){
                i--;
                min = Math.min(min, nums[i]);
            }
            else{
                j++;
                min = Math.min(min, nums[j]);
            }
        }
        ans = Math.max(ans, min * (j - i + 1));
    }
    return ans;
};