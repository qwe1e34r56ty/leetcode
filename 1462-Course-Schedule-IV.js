/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @param {number[][]} queries
 * @return {boolean[]}
 */
var checkIfPrerequisite = function(numCourses, prerequisites, queries) {
    var visited = new Array(numCourses).fill(false);
    var edge_total = prerequisites.length;
    var edge = new Array(numCourses);
    for(var i = 0; i < numCourses; i++){
        edge[i] = new Array();
    }
    for(var i = 0; i < edge_total; i++){
        edge[prerequisites[i][0]].push(prerequisites[i][1]);
    }
    var query_total = queries.length;
    var pre_req = new Array(numCourses);
    for(var i = 0; i < numCourses; i++){
        pre_req[i] = new Array(numCourses).fill(false);
    }
    for(var i = 0; i < numCourses; i++){
        if(visited[i] == false){
            dfs(i);
        }
    }
    for(var i = 0; i < query_total; i++){
        if(pre_req[queries[i][0]][queries[i][1]] == true){
            queries[i] = true;
        }
        else{
            queries[i] = false;
        }
    }
    return queries;
    
    function dfs(index){
        for(var i = 0; i < edge[index].length; i++){
            if(visited[edge[index][i]] == false){
                dfs(edge[index][i]);   
            }
            for(var j = 0; j < numCourses; j++){
                pre_req[index][j] ||= pre_req[edge[index][i]][j];
                pre_req[index][edge[index][i]] = true;
            }
        }
        visited[index] = true;
    }
};