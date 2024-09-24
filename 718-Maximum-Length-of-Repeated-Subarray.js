/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findLength = function(nums1, nums2) {
    var n1_len = nums1.length;
    var n2_len = nums2.length;
    var dp = new Array(n1_len);
    var answer = 0;
    for(var i = 0; i < n1_len; i++){
        dp[i] = new Array(n2_len).fill(0);
    }
    for(var i = 0; i < n2_len; i++){
        if(nums1[0] == nums2[i]){
            dp[0][i] = 1;
            answer = Math.max(answer, dp[0][i]);
        }
    }
    for(var i = 0; i < n1_len; i++){
        if(nums1[i] == nums2[0]){
            dp[i][0] = 1;
            answer = Math.max(answer, dp[i][0]);
        }
    }
    for(var i = 1; i < n1_len; i++){
        for(var j = 1; j < n2_len; j++){
            if(nums1[i] == nums2[j]){
                dp[i][j] = dp[i - 1][j - 1] + 1;
                answer = Math.max(answer, dp[i][j]);
            }
        }
    }
    //console.log(dp);
    return answer;
};