/**
 * @param {number[][]} dungeon
 * @return {number}
 */
var calculateMinimumHP = function(dungeon) {
    var dp = new Array(dungeon.length + 1);
    var min = (a, b) => (a < b) ? a : b;
    var cost = Infinity;
    for(var i = 0; i < dungeon.length + 1; i++){
        dp[i] = new Array(dungeon[0].length + 1);
        for(var j = 0; j < dungeon[0].length + 1; j++){
            dp[i][j] = Infinity;
        }
    }
    dp[dungeon.length][dungeon[0].length - 1] = 1;
    dp[dungeon.length - 1][dungeon[0].length] = 1;
    for(var i = 0; i < dungeon.length; i++){
        for(var j = 0; j < dungeon[0].length; j++){
            dp[i][j] = 0;
        }
    }
    for(var i = dungeon.length - 1; i >= 0; i--){
        for(var j = dungeon[0].length - 1; j >= 0; j--){
            dp[i][j] = min(dp[i][j + 1], dp[i + 1][j]);
            dp[i][j] = dp[i][j] - dungeon[i][j];
            if(dp[i][j] <= 0){
                dp[i][j] = 1;
            }
        }
    }
    console.log(dp);
    return dp[0][0];
};