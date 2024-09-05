/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var dp;
function min(a, b){
    return (a < b) ? a : b;
}
var minDistance = function(word1, word2) {
    dp = new Array(word1.length + 1);
    for(var i = 0; i < word1.length + 1; i++){
        dp[i] = new Array(word2.length + 1)
        for(var j = 0; j < word2.length + 1; j++){
            dp[i][j] = 0;
        }
    }
    for(var i = 1; i < word1.length + 1; i++){
        dp[i][0] = i;
    }
    for(var i = 1; i < word2.length + 1; i++){
        dp[0][i] = i;
    }
    for(var i = 1; i < word1.length + 1; i++){
        for(var j = 1; j < word2.length + 1; j++){
            if(word1[i - 1] == word2[j - 1]){
                dp[i][j] = dp[i - 1][j - 1];
            }
            else{
                dp[i][j] = min(min(dp[i - 1][j - 1], dp[i - 1][j]), dp[i][j - 1]) + 1;
            }
        }
    }
    return dp[word1.length][word2.length];
};