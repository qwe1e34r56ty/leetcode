/**
 * @param {number[]} nums
 * @param {number} m
 * @return {number}
 */
var splitArray = function(nums, m) {
    let len = nums.length;
    let max = 0;
    let sum = 0;
    for(let i = 0; i < len; i++){
        max = Math.max(max, nums[i]);
        sum += nums[i];
    }
    let l = max;
    let r = sum;
    while(l <= r){
        let mid = Math.floor((l + r) / 2);
        if(valid(mid)){
            r = mid - 1;
        }
        else{
            l = mid + 1;
        }
    }
    return l;
    
    function valid(target){
        let total = 0;
        let count = 1;
        for(let i = 0; i < len; i++){
            total += nums[i];
            if(total > target){
                total = nums[i];
                count++;
                if(count > m){
                    return false;
                }
            }
        }
        return true;
    }
};