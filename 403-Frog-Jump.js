/**
 * @param {number[]} stones
 * @return {boolean}
 */
var dp;
var canCross = function(stones) {
    dp = new Array(stones.length + 5);
    for(var i = 0; i < stones.length + 5; i++){
        dp[i] = new Array(stones.length + 2);
        for(var j = 0; j < stones.length + 2; j++){
            dp[i][j] = 0;
        }
    }
    if(stones[1] != 1){
        return false;
    }
    dp[1][1] = 1;
    for(var i = 1; i < stones.length + 2; i++){
        for(var j = 0; j < stones.length + 2; j++){
            if(dp[i][j] == 1){
                //console.log(stones[i]);
                for(var k = 1; k <= j + 1; k++){
                    if(stones[i + k] - stones[i] == j){
                        dp[i + k][j] = 1;
                    }
                    if(stones[i + k] - stones[i] == j - 1){
                        dp[i + k][j - 1] = 1;
                    }
                    if(stones[i + k] - stones[i] == j + 1){
                        dp[i + k][j + 1] = 1;
                        console.log(i + k);
                    }
                }
            }
        }
    }
    for(var i = 0; i < stones.length + 2; i++){
        if(dp[stones.length - 1][i] == 1){
            return true;
        }
    }
    return false;
};