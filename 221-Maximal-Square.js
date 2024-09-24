/**
 * @param {character[][]} matrix
 * @return {number}
 */

function min(a, b){
    return (a < b) ? a : b;
}

function max(a, b){
    return (a > b) ? a : b;
}

var maximalSquare = function(matrix) {
    var answer = new Array(matrix.length + 1);
    for(var i = 0; i < matrix.length + 1; i++){
        answer[i] = new Array(matrix[0].length + 1);
    }
    for(var i = 0; i < matrix.length + 1; i++){
        for(var j = 0; j < matrix[0].length + 1; j++){
            answer[i][j] = 0;
        }
    }
    var ans = 0;
    for(var i = 1; i <= matrix.length; i++){
        for(var j = 1; j <= matrix[0].length; j++){
            if(matrix[i - 1][j - 1] == '1'){
                answer[i][j] = 1;
                answer[i][j] = min(min(answer[i - 1][j], answer[i][j - 1]), answer[i - 1][j - 1]) + 1;
                ans = max(answer[i][j] * answer[i][j], ans);
            }
        }
    }
    return ans;
};