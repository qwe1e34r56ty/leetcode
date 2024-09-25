/**
 * @param {number[]} nums
 * @return {number}
 */
var longestSubarray = function(nums) {
    let start = 0;
    let end = 0;
    let midzero = 0;
    let ans = 0;
    while(end < nums.length && nums[end] != 1){
        end++;
        midzero++;
    }
    if(end == nums.length){
        return 0;
    }
    ans = 1;
    for(;end < nums.length; end++){
        if(nums[end] == 0){
            midzero++;
            continue;
        }
        while(midzero > 1){
            if(nums[start] == 0){
                midzero--;
            }
            start++;
        }
        ans = Math.max(ans, end - start);
        //console.log(ans);
    }
    return ans;
};