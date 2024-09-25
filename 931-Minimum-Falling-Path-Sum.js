/**
 * @param {number[][]} matrix
 * @return {number}
 */
var minFallingPathSum = function(matrix) {
    var row = matrix.length;
    var column = matrix[0].length;
    var dp = new Array(row);
    var answer = Infinity;
    for(var i = 0; i < row; i++){
        dp[i] = new Array(column).fill(Infinity);
    }
    for(var i = 0; i < column; i++){
        dp[0][i] = matrix[0][i];
    }
    
    for(var i = 1; i < row; i++){
        for(var j = 0; j < column; j++){
            for(var k = Math.max(j - 1, 0); k < Math.min(j + 2, column); k++){
                dp[i][j] = Math.min(dp[i][j], dp[i - 1][k] + matrix[i][j]);
            }
        }
    }
    for(var i = 0; i < column; i++){
        answer = Math.min(answer, dp[row - 1][i]);
    }
    console.log(dp);
    console.log(answer);
    return answer;
};