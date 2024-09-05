/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    let once = 0;
    let twice = 0;
    let len = nums.length;
    for(let i = 0; i < len; i++){
        once = (once ^ nums[i]) & ~twice;
        twice = (twice ^ nums[i]) & ~once;
    }
    return once;
};