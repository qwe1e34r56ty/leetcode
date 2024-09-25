/**
 * @param {number[]} stoneValue
 * @return {number}
 */
var stoneGameV = function(stoneValue) {
    var stone_len = stoneValue.length;
    var dp = new Array(stone_len);
    var max = new Array(stone_len);
    for(var i = 0; i < stone_len; i++){
        dp[i] = new Array(stone_len).fill(0);
        max[i] = new Array(stone_len).fill(0);
        max[i][i] = stoneValue[i];
    }
    for(var i = stone_len - 2; i >= 0; i--){
        for(var j = i + 1, sum = stoneValue[i], leftHalf = 0, mid = i; j < stone_len; j++){
            sum += stoneValue[j];
            while((leftHalf << 1) < sum){
                leftHalf += stoneValue[mid++];
            }
            if((leftHalf << 1) == sum){
                dp[i][j] = Math.max(max[i][mid - 1], max[j][mid]);
            }
            else{
                dp[i][j] = (mid > 1) ? max[i][mid - 2] : 0;
                dp[i][j] = Math.max(dp[i][j], (mid <= j) ? max[j][mid] : 0);
                //console.log(max[i][mid - 2]);
                //console.log(max[j][mid]);
            }
            max[i][j] = Math.max(max[i][j - 1], sum + dp[i][j]);
            max[j][i] = Math.max(max[j][i + 1], sum + dp[i][j]);
            /*console.log("mid : " + mid);
            console.log("dp" + "[" + i + "]" + "[" + j + "]" + " : " + dp[i][j]);
            console.log("sum : " + sum);
            console.log("leftHalf : " + leftHalf);
            console.log("max" + "[" + i + "]" + "[" + j + "]" + " : " + max[i][j]);
            console.log("max" + "[" + j + "]" + "[" + i + "]" + " : " + max[j][i]);
            console.log(" ");*/
        }
    }
    //console.log(max);
    //console.log(dp);
    return dp[0][stone_len - 1];
};