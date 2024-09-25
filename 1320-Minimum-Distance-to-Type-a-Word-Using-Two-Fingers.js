/**
 * @param {string} word
 * @return {number}
 */
var minimumDistance = function(word) {
    var answer = Infinity;
    var distance = new Array(26);
    for(var i = 0; i < 5; i++){
        for(var j = 0; j < 6 && 6 * i + j < 26; j++){
            distance[6 * i + j] = [i, j];
        }
    }
    var len = word.length;
    var dp = new Array(len + 1);
    for(var i = 0; i < len + 1; i++){
        dp[i] = new Array(len + 1).fill(Infinity);
    }
    dp[1][0] = 0;
    dp[0][1] = 0;
    for(var i = 2; i < len + 1; i++){
        dp[i][0] = dp[i - 1][0] + Math.abs(distance[index(word[i - 1])][0] - distance[index(word[i - 2])][0]) 
            + Math.abs(distance[index(word[i - 1])][1] - distance[index(word[i - 2])][1]);
        dp[0][i] = dp[i][0];
    }
    for(var i = 1; i < len + 1; i++){
        for(var j = 1; j < len + 1; j++){
            if(i == j){
                continue;
            }
            if(i == j + 1){
                dp[i][j] = dp[0][j];
                for(var k = 1; k < j; k++){
                    if(j == k){
                        continue;
                    }
                    dp[i][j] = Math.min(dp[i][j], dp[k][j] + Math.abs(distance[index(word[i - 1])][0] - distance[index(word[k - 1])][0]) 
                                        + Math.abs(distance[index(word[i - 1])][1] - distance[index(word[k - 1])][1]));
                }
                continue;
            }
            if(i + 1 == j){
                dp[i][j] = dp[i][0];
                for(var k = 1; k < i; k++){
                    if(i == k){
                        continue;
                    }
                    dp[i][j] = Math.min(dp[i][j], dp[i][k] + Math.abs(distance[index(word[j - 1])][0] - distance[index(word[k - 1])][0]) 
                                        + Math.abs(distance[index(word[j - 1])][1] - distance[index(word[k - 1])][1]));
                }
                continue;
            }
            else{
                if(i > j){
                    dp[i][j] = Math.min(dp[i][j], dp[i - 1][j] + Math.abs(distance[index(word[i - 1])][0] - distance[index(word[i - 2])][0]) 
                                        + Math.abs(distance[index(word[i - 1])][1] - distance[index(word[i - 2])][1]));
                }
                else if(i < j){
                    dp[i][j] = Math.min(dp[i][j], dp[i][j - 1] + Math.abs(distance[index(word[j - 1])][0] - distance[index(word[j - 2])][0]) 
                                        + Math.abs(distance[index(word[j - 1])][1] - distance[index(word[j - 2])][1]));
                }
                continue;
            }
        }
    }
    //console.log(distance);
    console.log(dp);
    for(var i = 0; i < len + 1; i++){
        answer = Math.min(answer, dp[len][i]);
        answer = Math.min(answer, dp[i][len]);
    }
    return answer;
    function index(char){
        return char.charCodeAt() - 65;
    }
};