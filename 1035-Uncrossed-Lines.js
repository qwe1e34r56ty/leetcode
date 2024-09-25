/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var maxUncrossedLines = function(nums1, nums2) {
    var n_1 = nums1.length;
    var n_2 = nums2.length;
    var dp = new Array(n_1 + 1);
    for(var i = 0; i <= n_1; i++){
        dp[i] = new Array(n_2 + 1).fill(0);
    }
    for(var i = 1; i <= n_1; i++){
        for(var j = 1; j <= n_2; j++){
            if(nums1[i - 1] == nums2[j - 1]){
                dp[i][j] = dp[i - 1][j - 1] + 1;
            }
            dp[i][j] = Math.max(dp[i][j], dp[i][j - 1]);
            dp[i][j] = Math.max(dp[i][j], dp[i - 1][j]);
        }
    }
    //console.log(dp);
    return dp[n_1][n_2];
};