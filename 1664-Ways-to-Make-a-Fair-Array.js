/**
 * @param {number[]} nums
 * @return {number}
 */
var waysToMakeFair = function(nums) {
    var asc_dp = new Array(nums.length);
    var desc_dp = new Array(nums.length);
    var n = 0;
    var m = 0;
    var answer = 0;
    for(var i = 0; i < nums.length; i++){
        asc_dp[i] = ((i > 1) ? asc_dp[i - 2] : 0) + nums[i];
    }
    for(var i = nums.length - 1; i >= 0; i--){
        desc_dp[i] = ((i < nums.length - 2) ? desc_dp[i + 2] : 0) + nums[i];
    }
    for(var i = 0; i < nums.length; i++){
        n = ((i > 1) ? asc_dp[i - 2] : 0) + ((i < nums.length - 1) ? desc_dp[i + 1] : 0);
        m = ((i > 0) ? asc_dp[i - 1] : 0) + ((i < nums.length - 2) ? desc_dp[i + 2] : 0);
        if(n == m){
            answer++;
        }
    }
    //console.log(asc_dp);
    //console.log(desc_dp);
    return answer;
};