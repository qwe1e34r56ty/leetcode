/**
 * @param {number[]} nums
 * @param {number} maximumBit
 * @return {number[]}
 */
var getMaximumXor = function(nums, maximumBit) {
    let maxValue = 1 << maximumBit;
    let cur = 0;
    let len = nums.length;
    for(let i = 0; i < len; i++){
        cur ^= nums[i];
    }
    nums.push(0);
    let answer = [];
    for(let i = len - 1; i >= 0; i--){
        cur ^= nums[i + 1];
        answer.push(~Math.floor((~(maxValue - 1)) ^ cur));
    }
    return answer;
};