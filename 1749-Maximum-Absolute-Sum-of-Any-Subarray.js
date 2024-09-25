/**
 * @param {number[]} nums
 * @return {number}
 */
var maxAbsoluteSum = function(nums) {
    let answer = 0;
    let pos = 0;
    let neg = 0;
    let len = nums.length;
    for(let i = 0; i < len; i++){
        if((pos += nums[i]) < 0){
            pos = 0;
        }
        if((neg += nums[i]) > 0){
            neg = 0;
        }
        answer = Math.max(answer, Math.abs(pos));
        answer = Math.max(answer, Math.abs(neg));
    }
    return answer;
};