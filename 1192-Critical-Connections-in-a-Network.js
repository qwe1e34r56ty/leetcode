/**
 * @param {number} n
 * @param {number[][]} connections
 * @return {number[][]}
 */
var criticalConnections = function(n, connections) {
    var connections_count = connections.length;
    var timestamp = new Array(n).fill(-1);
    var edge = new Array(n);
    for(var i = 0; i < n; i++){
        edge[i] = new Array();
    }
    for(var i = 0; i < connections_count; i++){
        edge[connections[i][0]].push(connections[i][1]);
        edge[connections[i][1]].push(connections[i][0]);
    }
    var answer = [];
    dfs(0, 0, -1);
    return answer;
    function dfs(index, depth, parent){
        if(timestamp[index] >= 0){
            return timestamp[index];
        }
        timestamp[index] = depth;
        var min_depth = n;
        for(var i = 0; i < edge[index].length; i++){
            if(edge[index][i] == parent){
                continue;
            }
            min_depth = Math.min(min_depth, dfs(edge[index][i], depth + 1, index));
            if(timestamp[edge[index][i]] > depth){
                answer.push([index, edge[index][i]]);
            }
        }
        timestamp[index] = min_depth;
        return min_depth
    }
}