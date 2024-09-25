/**
 * @param {number[][]} graph
 * @return {number}
 */
var shortestPathLength = function(graph) {
    var n = graph.length;
    var memo = new Array(1 << n);
    for(var i = 0; i < (1 << n); i++){
        memo[i] = new Array(n).fill(2 * n);
    }
    for(var i = 0; i < n; i++){
        memo[1 << i][i] = 0;
    }
    var answer = 2 * n;
    for(var i = 0; i < n; i++){
        dp(1 << i, i);
    }
    for(var i = 0; i < n; i++){
        answer = Math.min(answer, memo[(1 << n) - 1][i]);
    }
    return answer;
    
    function dp(bit, index){
        var len = graph[index].length;
        var next = 0;
        for(var i = 0; i < len; i++){
            next = graph[index][i];
            if(memo[bit | (1 << next)][next] > memo[bit][index] + 1){
                memo[bit | (1 << next)][next] = memo[bit][index] + 1;
                dp(bit | (1 << next), next);
            }
        }
    }
};