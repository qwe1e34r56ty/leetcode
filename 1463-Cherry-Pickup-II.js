/**
 * @param {number[][]} grid
 * @return {number}
 */
var cherryPickup = function(grid) {
    var y = grid.length;
    var x = grid[0].length;
    var dp = new Array(y);
    var answer = -1;
    for(var i = 0; i < y; i++){
        dp[i] = new Array(x)
        for(var j = 0; j < x; j++){
            dp[i][j] = new Array(x).fill(-1);
        }
    }
    if(x - 1 != 0){
        dp[0][0][x - 1] = grid[0][0] + grid[0][x - 1];
    }
    else{
        dp[0][0][x - 1] = grid[0][0];
    }
    for(var cur = 1; cur < y; cur++){
        for(var x1 = 0; x1 < x; x1++){
            for(var x2 = 0; x2 < x; x2++){
                for(var i = Math.max(x1 - 1, 0); i < Math.min(x1 + 2, x); i++){
                    for(var j = Math.max(x2 - 1, 0); j < Math.min(x2 + 2, x); j++){
                        if(dp[cur - 1][i][j] != -1){
                            if(x1 != x2){
                                dp[cur][x1][x2] = Math.max(dp[cur][x1][x2], dp[cur - 1][i][j] + grid[cur][x1] + grid[cur][x2]);
                            }
                            else{
                                dp[cur][x1][x2] = Math.max(dp[cur][x1][x2], dp[cur - 1][i][j] + grid[cur][x1]);
                            }
                        }
                    }
                }
            }
        }
    }
    for(var x1 = 0; x1 < x; x1++){
        for(var x2 = 0; x2 < x; x2++){
            answer = Math.max(answer, dp[y - 1][x1][x2]);
        }
    }
    return answer;
};