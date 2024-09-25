/**
 * @param {number[]} houses
 * @param {number[][]} cost
 * @param {number} m
 * @param {number} n
 * @param {number} target
 * @return {number}
 */
var minCost = function(houses, cost, m, n, target) {
    var houses_len = m;
    var cost_len = m;
    var colors_len = n;
    var neighbor_len = target;
    var dp = new Array(houses_len);
    var answer = Infinity;
    for(var i = 0; i < houses_len; i++){
        dp[i] = new Array(colors_len + 1);
        for(var j = 0; j < colors_len + 1; j++){
            dp[i][j] = new Array(neighbor_len + 1).fill(Infinity);
        }
    }
    
    if(houses[0] == 0){
        for(var i = 1; i < colors_len + 1; i++){
            dp[0][i][1] = cost[0][i - 1];
        }
    }
    else{
        dp[0][houses[0]][1] = 0;
    }
    
    for(var i = 1; i < houses_len; i++){
        if(houses[i] == 0){
            for(var j = 1; j < colors_len + 1; j++){
                for(var k = 1; k < neighbor_len + 1; k++){
                    for(var l = 1; l < colors_len + 1; l++){
                        if(j == l){
                            if(dp[i - 1][j][k] != Infinity){
                                dp[i][j][k] = Math.min(dp[i][j][k], dp[i - 1][j][k] + cost[i][j - 1]);
                            }
                        }
                        else{
                            if(dp[i - 1][l][k - 1] != Infinity){
                                dp[i][j][k] = Math.min(dp[i][j][k], dp[i - 1][l][k - 1] + cost[i][j - 1]);
                            }
                        }
                    }
                }
            }
        }
        else{
            for(var k = 1; k < neighbor_len + 1; k++){
                for(var l = 1; l < colors_len + 1; l++){
                    if(houses[i] == l){
                        if(dp[i - 1][houses[i]][k] != Infinity){
                            dp[i][houses[i]][k] = Math.min(dp[i][houses[i]][k], dp[i - 1][houses[i]][k]);
                        }
                    }
                    else{
                        if(dp[i - 1][l][k - 1] != Infinity){
                            dp[i][houses[i]][k] = Math.min(dp[i][houses[i]][k], dp[i - 1][l][k - 1]);
                        }
                    }
                }
            }
        }
    }
    for(var i = 1; i < colors_len + 1; i++){
        answer = Math.min(answer, dp[houses_len - 1][i][target])
    }
    if(answer == Infinity){
        answer = -1;
    }
    return answer;
};