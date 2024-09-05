var dp;
var cut;
var minCut = function(s) {
    if(s.length == 0) return 0;
    var min = 2001;
    dp = new Array(s.length);
    cut = new Array(s.length);
    cut[0] = 0;
    for(var i = 1; i < s.length; i++){
        cut[i] = 2001;
    }
    for(var i = 0; i < s.length; i++){
        dp[i] = new Array(s.length);
        for(var j = 0; j < s.length; j++){
            dp[i][j] = 0;
        }
    }
    for(var i = 0; i < s.length; i++){
        dp[i][i] = 1;
    }
    for(var i = 0; i < s.length - 1; i++){
        dp[i][i + 1] = (s[i] == s[i + 1]) ? 1 : 0;
    }
    for(var i = 2; i < s.length; i++){
        for(var j = 0; j + i < s.length; j++){
            dp[j][j + i] = (s[j] == s[j + i] && dp[j + 1][j + i - 1] != 0) ? 1 : 0;
        }
    }
    
    for(var i = 1; i < s.length; i++){
        for(var j = 0; j <= i; j++){
            if(dp[j][i] == 1){
                min = (j == 0) ? 0 : ((min < cut[j - 1] + 1) ? min : cut[j - 1] + 1);
            }
        }
        cut[i] = min;
        min = 2001;
    }    
    return cut[s.length - 1];
};