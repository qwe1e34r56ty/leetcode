/**
 * @param {number[][]} matrix
 * @return {number}
 */
var maxlen;
var max = (a, b) => (a > b) ? a : b;
var longestIncreasingPath = function(matrix) {
    answer = 0;
    if(matrix.length == 0){
        return answer;
    }
    maxlen = new Array(matrix.length);
    for(var i = 0; i < matrix.length; i++){
        maxlen[i] = new Array(matrix[0].length);
        for(var j = 0; j < matrix[0].length; j++){
            maxlen[i][j] = -1;
        }
    }
    for(var i = 0; i < matrix.length; i++){
        for(var j = 0; j < matrix[0].length; j++){
            answer = max(answer, dp(i, j, matrix.length, matrix[0].length, matrix));
        }
    }
    return answer;
};

function dp(i, j, m, n, matrix){
    var ret = 0;
    if(maxlen[i][j] != -1) return maxlen[i][j];
    ret = 1;
    if(i - 1 >= 0 && matrix[i - 1][j] < matrix[i][j]) ret = max(ret, dp(i - 1, j, m, n, matrix) + 1);
    if(i + 1 < m && matrix[i + 1][j] < matrix[i][j]) ret = max(ret, dp(i + 1, j, m, n, matrix) + 1);
    if(j - 1 >= 0 && matrix[i][j - 1] < matrix[i][j]) ret = max(ret, dp(i, j - 1, m, n, matrix) + 1);
    if(j + 1 < n && matrix[i][j + 1] < matrix[i][j]) ret = max(ret, dp(i, j + 1, m, n, matrix) + 1);
    maxlen[i][j] = ret;
    return ret;
}