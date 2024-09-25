/**
 * @param {number[]} jobDifficulty
 * @param {number} d
 * @return {number}
 */
var minDifficulty = function(jobDifficulty, d) {
    var job = jobDifficulty.slice();
    var job_len = job.length;
    if(job_len < d){
        return -1;
    }
    
    var maximum = new Array(job_len);
    for(var i = 0; i < job_len; i++){
        maximum[i] = new Array(job_len);
        maximum[i][i] = job[i];
    }
    for(var i = 0; i < job_len; i++){
        for(var j = 1; j < job_len - i; j++){
            maximum[i][i + j] = Math.max(maximum[i][i + j - 1], job[i + j]);
        }
    }
    
    var dp = new Array(d);
    for(var i = 0; i < d; i++){
        dp[i] = new Array(job_len).fill(Infinity);
    }    
    for(var i = 0; i < job_len; i++){
        dp[0][i] = maximum[0][i];
    }
    for(var i = 1; i < d; i++){
        for(var j = i; j < job_len; j++){
            for(var k = i - 1; k < j; k++){
                dp[i][j] = Math.min(dp[i][j], dp[i - 1][k] + maximum[k + 1][j]);
            }
        }
    }
    //console.log(maximum);
    //console.log(job);
    //console.log(dp);
    return dp[d - 1][job_len - 1];
};