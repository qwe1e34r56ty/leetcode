/**
 * @param {number[][]} arr
 * @return {number}
 */
var minFallingPathSum = function(arr) {
    var length = arr.length;
    var dp = new Array(length + 1);
    var answer = Infinity;
    for(var i = 0; i < length + 1; i++){
        dp[i] = new Array(length).fill(Infinity);
    }
    for(var i = 0; i < length; i++){
        dp[0][i] = 0;
    }
    for(var i = 1; i < length + 1; i++){
        for(var j = 0; j < length; j++){
            for(var k = 0; k < length; k++){
                if(j == k){
                    continue;
                }
                dp[i][j] = Math.min(dp[i][j], dp[i - 1][k] + arr[i - 1][j]);
            }
        }
    }
    for(var i = 0; i < length; i++){
        answer = Math.min(answer, dp[length][i]);
    }
    return answer;
};