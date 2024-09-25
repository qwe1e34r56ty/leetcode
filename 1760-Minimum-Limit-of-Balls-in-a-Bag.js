/**
 * @param {number[]} nums
 * @param {number} maxOperations
 * @return {number}
 */
var minimumSize = function(nums, maxOperations) {
    let len = nums.length;
    let l = 1;
    let r = nums[0];
    for(let i = 0; i < len; i++){
        r = Math.max(r, nums[i]);
    }
    while(l < r){
        let mid = Math.floor((l + r) / 2);
        let count = 0;
        for(let i = 0; i < nums.length; i++){
            count += Math.floor(nums[i] / mid) + ((nums[i] == Math.floor(nums[i] / mid) * mid) ? 0 : 1);
        }
        if(count > len + maxOperations){
            l = mid + 1;
        }
        else{
            r = mid;
        }
    }
    return l;
};