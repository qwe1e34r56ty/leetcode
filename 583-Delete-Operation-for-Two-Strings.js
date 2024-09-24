/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var minDistance = function(word1, word2) {
    let len_1 = word1.length;
    let len_2 = word2.length;
    let dp = new Array(len_1);
    for(let i = 0; i < len_1; i++){
        dp[i] = new Array(len_2).fill(0);
    }
    if(word1[0] == word2[0]){
        dp[0][0]++;
    }
    for(let i = 1; i < len_1; i++){
        if(word1[i] == word2[0]){
            dp[i][0] = 1;
        }
        dp[i][0] = Math.max(dp[i][0], dp[i - 1][0]);
    }
    for(let i = 1; i < len_2; i++){
        if(word1[0] == word2[i]){
            dp[0][i] = 1;
        }
        dp[0][i] = Math.max(dp[0][i], dp[0][i - 1]);
    }
    for(let i = 1; i < len_1; i++){
        for(let j = 1; j < len_2; j++){
            dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
            if(word1[i] == word2[j]){
                dp[i][j] = dp[i - 1][j - 1] + 1;
            }
        }
    }
    //console.log(dp);
    return len_1 + len_2 - 2 * dp[len_1 - 1][len_2 - 1];
};