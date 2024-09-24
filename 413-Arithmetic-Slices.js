/**
 * @param {number[]} nums
 * @return {number}
 */
var numberOfArithmeticSlices = function(nums) {
    let ans = 0;
    let len = nums.length;
    for(let i = 1, gap = 0, tmp = 0, cur = 0; i < len; i++){
        if(gap == nums[i] - nums[i - 1]){
            ans += cur;
            ans += tmp;
            cur += tmp;
        }
        else{
            cur = 0;
        }
        tmp = 1;
        gap = nums[i] - nums[i - 1];
        //console.log(ans);
    }
    return ans;
};