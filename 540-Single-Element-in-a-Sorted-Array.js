/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNonDuplicate = function(nums) {
    let l = 0;
    let r = nums.length - 1;
    while(l < r){
        let mid = Math.floor((l + r) / 2);
        if((mid % 2 == 0 && nums[mid] == nums[mid + 1]) || (mid % 2 == 1 && nums[mid] == nums[mid - 1]))
            l = mid + 1;
        else
            r = mid;
    }
    return nums[l];
};