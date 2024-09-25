/**
 * @param {string[]} board
 * @return {number[]}
 */
var pathsWithMaxScore = function(board) {
    var row = board.length;
    var column = board[0].length;
    var mod = Math.pow(10, 9) + 7;
    var dp = new Array(row + 1);
    for(var i = 0; i < row + 1; i++){
        dp[i] = new Array(column + 1);
        for(var j = 0; j < column + 1; j++){
            dp[i][j] = new Array(2).fill(0);
        }
    }
    board[0] = '0' + board[0].slice(1, column);
    board[column - 1] = board[column - 1].slice(0, column - 1) + '0';
    dp[1][1][0] = 0;
    dp[1][1][1] = 1;
    var dir = [-1, -1, 0, -1];
    for(var i = 1; i < row + 1; i++){
        for(var j = 1; j < column + 1; j++){
            if(board[i - 1][j - 1] != 'X'){
                for(var k = 0; k < 3; k++){
                    dp[i][j][0] = Math.max(dp[i][j][0], dp[i + dir[k]][j + dir[k + 1]][0]);
                }
                for(var k = 0; k < 3; k++){
                    if(dp[i + dir[k]][j + dir[k + 1]][0] == dp[i][j][0]){
                        dp[i][j][1] += dp[i + dir[k]][j + dir[k + 1]][1];
                    }
                }
                dp[i][j][1] %= mod;
                if(dp[i][j][1] != 0){
                    dp[i][j][0] += parseInt(board[i - 1][j - 1]);
                }
            }
        }
    }
    //console.log(dp);
    return dp[row][column];
};