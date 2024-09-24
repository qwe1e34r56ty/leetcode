/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSumOfThreeSubarrays = function(nums, k) {
    var sum = 0;
    var dp = new Array(nums.length).fill(0);
    var answer = new Array(3);
    var answer_sum = 0;
    for(var i = 0; i < nums.length; i++){
        sum += nums[i];
        if(i + 1 >= k){
            dp[i + 1 - k] = sum;
            sum -= nums[i + 1 - k];
        }
    }
    
    var max_a = new Array(nums.length);
    var max_b = new Array(nums.length);
    var max = (a, b) => (a > b) ? a : b;
    var tmp = 0;
    for(var i = 0; i < nums.length; i++){
        if(dp[tmp] < dp[i]){
            tmp = i;
        }
        max_a[i] = tmp;
    }
    tmp = nums.length - 1;
    for(var i = nums.length - 1; i >= 0; i--){
        if(dp[tmp] <= dp[i]){
            tmp = i;
        }
        max_b[i] = tmp;
    }
    
    for(var i = k; i < nums.length - k; i++){
        if(answer_sum < dp[max_a[i - k]] + dp[i] + dp[max_b[i + k]]){
            answer_sum = dp[max_a[i - k]] + dp[i] + dp[max_b[i + k]]
            answer = [max_a[i - k], i, max_b[i + k]];
        }
    }
    /*console.log(dp);
    console.log(max_a);
    console.log(max_b);*/
    return answer;
};