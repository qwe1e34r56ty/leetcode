/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var maxDotProduct = function(nums1, nums2) {
    var nums1_len = nums1.length;
    var nums2_len = nums2.length;
    var dp = new Array(nums1_len + 1);
    var answer = 0;
    for(var i = 0; i < nums1_len + 1; i++){
        dp[i] = new Array(nums2_len + 1).fill(0);
    }
    //dp[1][1] = Math.max(nums1[0] * nums2[0]);
    for(var i = 1; i < nums1_len + 1; i++){
        dp[i][1] = Math.max(dp[i - 1][1], nums1[i - 1] * nums2[0]);
    }
    for(var i = 1; i < nums2_len + 1; i++){
        dp[1][i] = Math.max(dp[1][i - 1], nums1[0] * nums2[i - 1]);
    }
    for(var i = 2; i < nums1_len + 1; i++){
        for(var j = 2; j < nums2_len + 1; j++){
            dp[i][j] = dp[i - 1][j - 1] + nums1[i - 1] * nums2[j - 1];
            dp[i][j] = Math.max(dp[i][j], dp[i - 1][j]);
            dp[i][j] = Math.max(dp[i][j], dp[i][j - 1]);
            dp[i][j] = Math.max(dp[i][j], dp[i - 1][j - 1]);
        }
    }
    answer = dp[nums1_len][nums2_len];
    if(answer == 0){
        answer = -Infinity;
        for(var i = 1; i < nums1_len + 1; i++){
           for(var j = 1; j < nums2_len + 1; j++){
               answer = Math.max(answer, nums1[i - 1] * nums2[j - 1]);
           } 
        }
    }
    return answer;
};