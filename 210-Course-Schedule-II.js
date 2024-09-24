/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 */
var findOrder = function(numCourses, prerequisites) {
    var UNVISITED = 0;
    var VISITING = 1;
    var VISITED = 2;
    var edge_total = prerequisites.length;
    var node_total = numCourses;
    var answer = [];
    var state = new Array(node_total).fill(UNVISITED);
    var edge = new Array(numCourses);
    for(var i = 0; i < numCourses; i++){
        edge[i] = new Array();
    }
    for(var i = 0; i < edge_total; i++){
        edge[prerequisites[i][0]].push(prerequisites[i][1]);
    }
    for(var i = 0; i < node_total; i++){
        if(state[i] == UNVISITED){
            if(!dfs(i)){
                return [];
            }
        }
    }
    return answer;
    function dfs(index){
        state[index] = VISITING;
        var next_node = edge[index];
        for(var i = 0; i < next_node.length; i++){
            if(state[next_node[i]] == UNVISITED){
                if(!dfs(next_node[i])){
                    return false;
                }
            }
            else if(state[next_node[i]] == VISITING){
                return false;
            }
        }
        state[index] = VISITED;
        answer.push(index);
        return true;
    }
};