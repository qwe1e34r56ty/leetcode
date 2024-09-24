/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {string[]}
 */
var wordBreak = function(s, wordDict) {
    var s_len = s.length;
    var w_len = wordDict.length;
    var dp = new Array(s_len);
    for(var i = 0; i < s_len; i++){
        dp[i] = new Array();
    }
    for(var i = 0; i < w_len; i++){
        if(s.slice(0, wordDict[i].length).localeCompare(wordDict[i]) == 0){
            dp[wordDict[i].length - 1].push(wordDict[i].slice());
        }
    }
    for(var i = 1; i < s_len; i++){
        if(dp[i - 1].length != 0){
            for(var j = 0; j < w_len; j++){
                if(s.slice(i, i + wordDict[j].length).localeCompare(wordDict[j]) == 0){
                    for(var k = 0; k < dp[i - 1].length; k++){
                        dp[i + wordDict[j].length - 1].push(dp[i - 1][k] + " " + wordDict[j].slice());
                    }
                }
            }
        }
    }
    return dp[s_len - 1];
};