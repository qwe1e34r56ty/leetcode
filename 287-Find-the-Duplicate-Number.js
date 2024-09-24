/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function(nums) {
    let first = nums[0];
    let second = nums[nums[0]];
    while(first != second){
        first = nums[first];
        second = nums[nums[second]];
    }
    first = 0;
    while(first != second){
        first = nums[first];
        second = nums[second];
    }
    return first;
};