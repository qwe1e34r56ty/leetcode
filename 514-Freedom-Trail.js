/**
 * @param {string} ring
 * @param {string} key
 * @return {number}
 */
var findRotateSteps = function(ring, key) {
    var dp = new Array(ring.length);
    var min = (a, b) => (a < b) ? a : b;
    var cost = Infinity;
    for(var i = 0; i < dp.length; i++){
        dp[i] = new Array(key.length);
    }
    for(var i = 0; i < ring.length; i++){
        cost = Infinity;
        for(var j = 0; j < ring.length; j++){
            if(ring[j] == key[key.length - 1]){
                cost = min(cost,
                           min(Math.abs(j - i),
                               min(Math.abs(j + ring.length - i),
                                   min(Math.abs(i - j),
                                       Math.abs(i + ring.length - j)
                                       )
                                   )
                               )
                           );
            }
        }
        dp[i][key.length - 1] = cost + 1;
    }
    for(var i = key.length - 2; i >= 0; i--){
        for(var j = 0; j < ring.length; j++){
            cost = Infinity;
            for(var k = 0; k < ring.length; k++){
                if(ring[k] == key[i]){
                    cost = min(cost,
                               min(Math.abs(k - j),
                                   min(Math.abs(k + ring.length - j),
                                       min(Math.abs(j - k),
                                           Math.abs(j + ring.length - k)
                                           )
                                       )
                                   ) + dp[k][i + 1]
                              );
                }
            }
            dp[j][i] = cost + 1;
        }
    }
    console.log(dp);
    return dp[0][0];
};