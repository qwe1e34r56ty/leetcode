/**
 * @param {number[][]} grid
 * @return {number}
 */
var cherryPickup = function(grid) {
    var N = grid.length, M = (N << 1) - 1;
    var dp = new Array(N);
    for(var i = 0; i < N; i++){
        dp[i] = new Array(N).fill(0);
    }
    dp[0][0] = grid[0][0];
    
    for (var n = 1; n < M; n++) {
		for (var i = N - 1; i >= 0; i--) {
			for (var p = N - 1; p >= 0; p--) {
				var j = n - i, q = n - p;
                
				if (j < 0 || j >= N || q < 0 || q >= N || grid[i][j] < 0 || grid[p][q] < 0) {
                    dp[i][p] = -1;
                    continue;
                 }
		 
				 if (i > 0) dp[i][p] = Math.max(dp[i][p], dp[i - 1][p]);
				 if (p > 0) dp[i][p] = Math.max(dp[i][p], dp[i][p - 1]);
				 if (i > 0 && p > 0) dp[i][p] = Math.max(dp[i][p], dp[i - 1][p - 1]);
		 
				 if (dp[i][p] >= 0) dp[i][p] += grid[i][j] + (i != p ? grid[p][q] : 0)
             }
		 }
    }
    
    return Math.max(dp[N - 1][N - 1], 0);
}