/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
    let len = nums.length;
    let max = 0;
    for(let i = 0; i < len; i++){
        if(max < i){
            break;
        }
        for(let j = max + 1; (j <= i + nums[i]) && (j < len); j++){
            max = j;
        }
    }
    return max == (len - 1);
};