/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(target, nums) {
    let len = nums.length;
    let cur = 0;
    let queue = [];
    let answer = Math.pow(10, 9) + 7;
    for(let i = 0; i < len; i++){
        cur += nums[i];
        queue.push(nums[i]);
        while(cur >= target){
            answer = Math.min(answer, queue.length);
            cur -= queue[0];
            queue.shift();
        }
    }
    if(answer == Math.pow(10, 9) + 7){
        answer = 0;
    }
    return answer;
};