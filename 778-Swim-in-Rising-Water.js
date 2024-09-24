/**
 * @param {number[][]} grid
 * @return {number}
 */
var swimInWater = function(grid) {
    var N = grid.length;
    var bellman_ford = new Array(N);
    for(var i = 0; i < N; i++){
        bellman_ford[i] = new Array(N).fill(2501);
    }
    bellman_ford[0][0] = grid[0][0];
    for(var i = 0; i < N * N + 1; i++){
        for(var j = 0; j < N; j++){
            for(var k = 0; k < N; k++){
                if(j - 1 >= 0){
                    bellman_ford[j][k] = Math.min(bellman_ford[j - 1][k], bellman_ford[j][k]);
                }
                if(j + 1 < N){
                    bellman_ford[j][k] = Math.min(bellman_ford[j + 1][k], bellman_ford[j][k]);
                }
                if(k - 1 >= 0){
                    bellman_ford[j][k] = Math.min(bellman_ford[j][k - 1], bellman_ford[j][k]);
                }
                if(k + 1 < N){
                    bellman_ford[j][k] = Math.min(bellman_ford[j][k + 1], bellman_ford[j][k]);
                }
                bellman_ford[j][k] = Math.max(bellman_ford[j][k], grid[j][k]);
            }
        }
    }
    return bellman_ford[N - 1][N - 1];
};