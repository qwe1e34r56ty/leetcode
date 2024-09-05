/**
 * @param {string} s
 * @return {string[][]}
 */
var dp;
var answer;
var tmp;
var str;
var partition = function(s) {
    str = s;
    dp = new Array(s.length);
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
        dp[i][i + 1] = (s[i] == s[i + 1]) ? 2 : 0;
    }
    for(var i = 2; i < s.length; i++){
        for(var j = 0; j + i < s.length; j++){
            dp[j][j + i] = (s[j] == s[j + i] && dp[j + 1][j + i - 1] != 0) ? dp[j + 1][i + j - 1] + 2 : 0;
        }
    }
    
    answer = [];
    tmp = [];
    dfs(answer, dp, tmp, 0);
    for(var i = 0; i < answer.length; i++){
        for(var j = 0; j < answer[i].length - 1; j++){
            answer[i][j] = str.slice(answer[i][j], answer[i][j + 1]);
        }
	    answer[i][answer[i].length - 1] = str.slice(answer[i][answer[i].length - 1], str.length);
    }
    return answer;
};

var dfs = function(ans, g, t, v){
    t.push(v);
    for(var i = 0; i < g.length - 1; i++){
        if(g[v][i] != 0){
            dfs(ans, g, t, i + 1);
        }
    }
    if(g[v][g.length - 1] != 0){
        ans.push(t.slice());
    }
    t.pop(v);
}