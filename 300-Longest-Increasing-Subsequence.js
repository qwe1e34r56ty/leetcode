/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function(nums) {
    var dp = new Array(nums.length);
    dp[0] = 1;
    var tmp;
    if(nums.length == 0){
        return 0;
    }
    var ans = 1;
    var max = (a, b) => (a > b) ? a : b;
    for(var i = 1; i < nums.length; i++){
        tmp = 1;
        for(var j = 0; j < i; j++){
            if(nums[j] < nums[i]){
                tmp = max(tmp, dp[j] + 1);
            }
        }
        dp[i] = tmp;
        ans = max(ans, dp[i]);
    }
    return ans;
};