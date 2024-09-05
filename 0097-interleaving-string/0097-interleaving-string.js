/**
 * @param {string} s1
 * @param {string} s2
 * @param {string} s3
 * @return {boolean}
 */
var dp;
var isInterleave = function(s1, s2, s3) {
    dp = new Array(s3.length + 1); 
    {
    for(var i = 0; i <= s3.length; i++){
        dp[i] = new Array(s1.length + 1);
        for(var j = 0; j <= s1.length; j++){
            dp[i][j] = new Array(s2.length + 1);
            for(var k = 0; k <= s2.length; k++){
                dp[i][j][k] = 0;
            }
        }
    }
    }
           
    {
    dp[0][0][0] = 1; 
    for(var i = 1; i <= s1.length; i++){
        if(s3[i - 1] == s1[i - 1]){
            dp[i][i][0] = 1;
        }
        else{
            break;
        }
    }
    for(var i = 1; i <= s2.length; i++){
        if(s3[i - 1] == s2[i - 1]){
            dp[i][0][i] = 1;
        }
        else{
            break;
        }
    }
    }
    
    for(var i = 2; i <= s3.length; i++){
        for(var j = 1; j <= s1.length; j++){
            for(var k = 1; k <= s2.length && j + k <= i; k++){
                dp[i][j][k] = (dp[i - 1][j - 1][k] && s3[i - 1] == s1[j - 1]) || (dp[i - 1][j][k - 1] && s3[i - 1] == s2[k - 1]);
            }
        }
    }
    return dp[s3.length][s1.length][s2.length];
};