/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var constrainedSubsetSum = function(nums, k) {
    let q = [];
    let q_len = 0;
    let ans = -Infinity;
    let len = nums.length;
    for(let i = 0; i < len; i++){
        nums[i] += (q_len != 0) ? q[0] : 0;
        ans = Math.max(ans, nums[i]);
        while(q_len != 0 && q[q_len - 1] < nums[i]){
            q.pop();
            q_len--;
        }
        if(nums[i] > 0){
            q.push(nums[i]);   
            q_len++;
        }
        if(i >= k && q_len != 0 && nums[i - k] == q[0]){
            q.shift();
            q_len--;
        }
        
    }
    return ans;
};