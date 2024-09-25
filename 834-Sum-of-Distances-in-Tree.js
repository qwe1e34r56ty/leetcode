/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number[]}
 */
var sumOfDistancesInTree = function(n, edges) {
    var edge = new Array(n);
    for(var i = 0; i < n; i++){
        edge[i] = new Array();
    }
    for(var i = 0; i < edges.length; i++){
        edge[edges[i][0]].push(edges[i][1]);
        edge[edges[i][1]].push(edges[i][0]);
    }
    var count = new Array(n).fill(0);
    var subsum = new Array(n).fill(0);
    var answer = new Array(n);
    count_dfs(0);
    subsum_dfs(0);
    answer_dfs(0, -1);
    return answer;
    function count_dfs(i, parent){
        var sum = 1;
        for(var j = 0; j < edge[i].length; j++){
            if(edge[i][j] == parent){
                continue;
            }
            sum += count_dfs(edge[i][j], i);
        }
        count[i] = sum;
        return sum;
    }
    function subsum_dfs(i, parent){
        var sum = 0;
        for(var j = 0; j < edge[i].length; j++){
            if(edge[i][j] == parent){
                continue;
            }
            sum += subsum_dfs(edge[i][j], i);
        }
        sum += count[i] - 1;
        subsum[i] = sum;
        return sum;
    }
    function answer_dfs(i, parent){
        if(parent != -1){
            answer[i] = answer[parent] + n - 2 * count[i];
        }
        else{
            answer[i] = subsum[0];
        }
        for(var j = 0; j < edge[i].length; j++){
            if(edge[i][j] == parent){
                continue;
            }
            answer_dfs(edge[i][j], i);
        }
    }
};