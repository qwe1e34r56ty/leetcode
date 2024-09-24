/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var findTargetSumWays = function(nums, target) {
    var dp_1 = [];
    var dp_2 = [];
    var answer = 0;
    dp_1.push(-nums[0]);
    dp_1.push(nums[0]);
    for(var i = 1; i < nums.length; i++){
        dp_2 = [];
        for(var j = 0; j < dp_1.length; j++){
            dp_2.push(dp_1[j] - nums[i]);
            dp_2.push(dp_1[j] + nums[i]);
        }
        dp_1 = dp_2.slice();
    }
    for(var i = 0; i < dp_1.length; i++){
        if(dp_1[i] == target){
            answer++;
        }
    }
    return answer;
};