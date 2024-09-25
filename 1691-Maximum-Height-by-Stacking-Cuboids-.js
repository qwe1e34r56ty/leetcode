/**
 * @param {number[][]} cuboids
 * @return {number}
 */
var maxHeight = function(cuboids) {
    var cuboid_len = cuboids.length;
    cuboids.sort(
        function(a, b){
            return (b[0] + b[1] + b[2]) - (a[0] + a[1] + a[2])
        }
    );
    for(var i = 0; i < cuboid_len; i++){
        cuboids[i].sort(
            function(a, b){
                return b - a;
            }
        )
    }
    var dp = new Array(cuboid_len).fill(0);
    dp[0] = cuboids[0][0];
    var answer = dp[0];
    for(var i = 1; i < cuboid_len; i++){
        dp[i] = cuboids[i][0];
        for(var j = 0; j < i; j++){
            if(cuboids[i][0] <= cuboids[j][0]){
                if(cuboids[i][1] <= cuboids[j][1] && cuboids[i][2] <= cuboids[j][2]){
                    dp[i] = Math.max(dp[i], dp[j] + cuboids[i][0]);
                    //console.log(dp[i]);
                }
            }
            answer = Math.max(answer, dp[i]);
        }
    }
    //console.log(cuboids);
    //console.log(dp);
    return answer;
};