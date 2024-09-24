/**
 * @param {number[]} nums
 * @return {number[]}
 */
var singleNumber = function(nums) {
    let len = nums.length;
    let adiffb = 0;
    let a = 0;
    let b = 0;
    for(let i = 0; i < len; i++){
        adiffb ^= nums[i];
    }
    adiffb ^= (adiffb & (adiffb - 1));
    for(let i = 0; i < len; i++){
        if(nums[i] & adiffb){
            a ^= nums[i];
        }
        else{
            b ^= nums[i];
        }
    }
    return [a, b];
};