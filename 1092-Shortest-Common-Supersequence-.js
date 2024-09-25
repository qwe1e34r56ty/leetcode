/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
var shortestCommonSupersequence = function(str1, str2) {
    var str1_len = str1.length;
    var str2_len = str2.length;
    var answer = "";
    var dp = new Array(str1_len + 1);
    for(var i = 0; i < str1_len + 1; i++){
        dp[i] = new Array(str2_len + 1).fill(0);
    }
    for(var i = 1; i < str1_len + 1; i++){
        dp[i][0] = i;
    }
    for(var i = 1; i < str2_len + 1; i++){
        dp[0][i] = i;
    }
    for(var i = 1; i < str1_len + 1; i++){
        for(var j = 1; j < str2_len + 1; j++){
            if(str1[i - 1] == str2[j - 1]){
                dp[i][j] = dp[i - 1][j - 1] + 1;
            }
            else{
                dp[i][j] = dp[i - 1][j] + 1;
                dp[i][j] = Math.min(dp[i][j], dp[i][j - 1] + 1);
            }
        }
    }
    var i = str1_len;
    var j = str2_len;
    for(; i > 0 && j > 0;){
        if(dp[i - 1][j] + 1 == dp[i][j]){
            answer += str1[i - 1];
            i--
        }
        else if(dp[i][j - 1] + 1 == dp[i][j]){
            answer += str2[j - 1];
            j--
        }
        else{
            answer += str1[i - 1];
            i--;
            j--;
        }
    }
    for(;i > 0; i--){
        answer += str1[i - 1];
    }
    for(;j > 0; j--){
        answer += str2[j - 1];
    }
    return reverse(answer);
    function reverse(str){
        var ret = "";
        for(var i = str.length - 1; i >= 0; i--){
            ret += str[i];
        }
        return ret;
    }
};