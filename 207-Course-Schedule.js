/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function(numCourses, prerequisites) {
    var edge = new Array(numCourses);
    for(var i = 0; i < numCourses; i++){
        edge[i] = new Array();
    }
    var pre_count = prerequisites.length;
    for(var i = 0; i < pre_count; i++){
        edge[prerequisites[i][0]].push(prerequisites[i][1]);
    }
    var rank = new Array(numCourses).fill(-1);
    var visited = new Array(numCourses).fill(0);
    var time = 0;
    var color = 0;
    for(var i = 0; i < numCourses; i++){
        if(visited[i] == 0 && !dfs(i, ++color)){
            return false;
        }
    }
    //console.log(rank);
    //console.log(visited);
    console.log(edge[4]);
    return true;
    function dfs(index, color){
        visited[index] = color;
        rank[index] = time++;
        var origin = rank[index];
        for(var i = 0; i < edge[index].length; i++){
            if(visited[edge[index][i]] != color){
                if(!dfs(edge[index][i], color, time)){
                    return false;
                }
                /*if(index == 4){
                    console.log(rank[edge[index][i]]);
                }*/
            }
            if(rank[edge[index][i]] == origin && visited[edge[index][i]] == visited[index]){
                return false;
            }
            if(visited[edge[index][i]] == visited[index]){
                rank[index] = Math.min(rank[index], rank[edge[index][i]]);
            }
        }
        return true;
    }
};