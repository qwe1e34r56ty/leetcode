/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
var longestCommonSubsequence = function(text1, text2) {
    var text1_len = text1.length;
    var text2_len = text2.length;
    var dp = new Array(text1_len);
    for(var i = 0; i < text1_len; i++){
        dp[i] = new Array(text2_len).fill(0);
    }
    for(var i = 0; i < text2_len; i++){
        if(text1[0] == text2[i]){
            dp[0][i] = 1;
        }
        else if(i > 0){
            dp[0][i] = dp[0][i - 1];
        }
    }
    for(var i = 0; i < text1_len; i++){
        if(text1[i] == text2[0]){
            dp[i][0] = 1;
        }
        else if(i > 0){
            dp[i][0] = dp[i - 1][0];
        }
    }
    for(var i = 1; i < text1_len; i++){
        for(var j = 1; j < text2_len; j++){
            if(text1[i] == text2[j]){
                dp[i][j] = Math.max(dp[i][j], dp[i - 1][j - 1] + 1);
            }
            dp[i][j] = Math.max(dp[i][j], dp[i - 1][j - 1]);
            dp[i][j] = Math.max(dp[i][j], dp[i - 1][j]);
            dp[i][j] = Math.max(dp[i][j], dp[i][j - 1]);
        }
    }
    //console.log(dp);
    return dp[text1_len - 1][text2_len - 1];
};