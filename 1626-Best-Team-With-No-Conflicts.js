/**
 * @param {number[]} scores
 * @param {number[]} ages
 * @return {number}
 */
var bestTeamScore = function(scores, ages) {
    var len = scores.length;
    var array = [];
    var answer = 0;
    for(var i = 0; i < len; i++){
        array.push([scores[i], ages[i]]);
    }
    array.sort(
        function(a, b){
            if(a[1] == b[1]){
                return a[0] - b[0];
            }
            return a[1] - b[1];
        });
    var dp = new Array(len).fill(0);
    for(var i = 0; i < len; i++){
        for(var j = 0; j < i; j++){
            if(array[j][1] == array[i][1] || array[j][0] <= array[i][0]){
                dp[i] = Math.max(dp[i], dp[j]);
            }
        }
        dp[i] += array[i][0];
        answer = Math.max(answer, dp[i]);
    }
    //console.log(dp);
    //console.log(array);
    return answer;
};