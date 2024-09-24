/**
 * @param {number[][]} envelopes
 * @return {number}
 */
var maxEnvelopes = function(envelopes) {
    var dp = new Array(envelopes.length);
    var ans = 1;
    var max = (a, b) => (a > b) ? a : b;
    if(envelopes.length == 0){
        return 0;
    }
    for(var i = 0; i < dp.length; i++){
        dp[i] = 1;
    }
    envelopes.sort(compare);
    for(var i = 1; i < dp.length; i++){
        for(var j = 0; j < i; j++){
            if(envelopes[i][0] > envelopes[j][0] && envelopes[i][1] > envelopes[j][1]){
                dp[i] = max(dp[i], dp[j] + 1);
            }
            ans = max(ans, dp[i]);
        }
    }
    return ans;                           
                                 
    function compare(a, b){
        if(a[0] > b[0]){
            return 1;
        }
        else if(a[0] == b[0]){
            if(a[1] > b[1]){
                return 1;
            }
            else{
                return -1;
            }
        }
        else{
            return -1;
        }
    }
};