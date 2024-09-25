/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var longestPalindrome = function(word1, word2) {
    let word1_len = word1.length;
    let word2_len = word2.length;
    let tmp = "";
    for(let i = word2_len - 1; i >= 0; i--){
        tmp += word2[i];
    }
    word2 = tmp;
    let dp = new Array(word1_len + 1);
    for(let i = 0; i < word1_len + 1; i++){
        dp[i] = new Array(word2_len + 1).fill(0);
    }
    for(let i = 1; i < word1_len + 1; i++){
        for(let j = 1; j < word2_len + 1; j++){
            if(word1[i - 1] == word2[j - 1]){
                dp[i][j] = dp[i - 1][j - 1] + 1;
            }
            dp[i][j] = Math.max(dp[i][j], dp[i][j - 1]);
            dp[i][j] = Math.max(dp[i][j], dp[i - 1][j]);
        }
    }
    let answer = 0;
    let word1_table = palin_table(word1);
    let word2_table = palin_table(word2);
    for(let i = 0; i < word1_len - 1; i++){
        if(dp[i + 1][word2_len] != 0){
            answer = Math.max(answer, dp[i + 1][word2_len] * 2 + word1_table[i + 1][word1_len - 1]);
        }
    };
    for(let i = 0; i < word2_len - 1; i++){
        if(dp[word1_len][i + 1] != 0){
            answer = Math.max(answer, dp[word1_len][i + 1] * 2 + word2_table[i + 1][word2_len - 1]);
        }
    }
    answer = Math.max(answer, dp[word1_len][word2_len] * 2);
    return answer;
    
    function palin_table(s){
        let len = s.length;
        let table = new Array(len);
        for(let i = 0; i < len; i++){
            table[i] = new Array(len).fill(0);
            table[i][i] = 1;
        }
        for(let i = 0; i < len - 1; i++){
            table[i][i + 1] = 1;
            if(s[i] == s[i + 1]){
                table[i][i + 1] = 2;
            }
        }
        for(let i = 2; i < len; i++){
            for(let j = 0; j < len - i; j++){
                table[j][j + i] = table[j + 1][j + i - 1];
                table[j][j + i] = Math.max(table[j][j + i], table[j + 1][j + i]);
                table[j][j + i] = Math.max(table[j][j + i], table[j][j + i - 1]);
                if(s[j] == s[j + i]){
                    table[j][j + i] = table[j + 1][j + i - 1] + 2;
                }
            }
        }
        return table;
    }
};