/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
    let len = nums.length;
    let first = -1;
    let last = -1;
    let l = 0;
    let r = len - 1;
    while(l < r){
        let m = Math.floor((l + r) / 2);
        if(nums[m] >= target){
            r = m;
        }
        else{
            l = m + 1;
        }
    }
    if(nums[l] == target)
        first = l;
    l = 0;
    r = len - 1;
    while(l < r){
        let m = Math.floor((l + r + 1) / 2);
        if(nums[m] <= target){
            l = m;
        }
        else{
            r = m - 1;
        }
    }
    if(nums[l] == target)
        last = l;
    return [first, last];
};