/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    var number = [];
    for(var i = 0; i < nums.length - 1; i++){
        for(var j = i + 1; j < nums.length; j++){
            if(nums[i] + nums[j] == target){
                number.push(i);
                number.push(j);
            }
        }
    }
    return number;
};