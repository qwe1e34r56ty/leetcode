/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var smallestDistancePair = function(nums, k) {
    nums.sort(function(a, b){return a - b;});
    let len = nums.length;
    let l = nums[1] - nums[0];
    for(let i = 2; i < len; i++){
        l = Math.min(l, nums[i] - nums[i - 1]);
    }
    let r = nums[len - 1] - nums[0];
    while(l < r){
        let mid = Math.floor((l + r) / 2);
        let cur = 0;
        let j = 1;
        for(let i = 0; i < len - 1; i++){
            while(j < len && (nums[j] - nums[i]) <= mid)
                j++;
            cur += j - i - 1;
        }
        if(cur < k){
            l = mid + 1;
        }
        else{
            r = mid;
        }
    }
    return l;
};