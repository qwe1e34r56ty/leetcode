/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxResult = function(nums, k) {
    let len = nums.length;
    let cur = 0;
    let queue = [];
    for(let i = 0; i < len; i++){
        cur = nums[i] + ((queue.length == 0) ? 0 : nums[queue[0]]);
        while(queue.length != 0 && nums[queue[queue.length - 1]] < cur){
            queue.pop();
        }
        queue.push(i);
        while(queue.length != 0 && queue[0] <= i - k){
            queue.shift();
        }
        nums[i] = cur;
    }
    return cur;
};