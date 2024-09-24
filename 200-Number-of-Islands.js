/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    var m = grid.length;
    var n = grid[0].length;
    var answer = 0;
    var dir = [0, 1, 0, -1, 0];
    var visited = new Array(m);
    for(var i = 0; i < m ; i++){
        visited[i] = new Array(n).fill(0);
    }
    for(var i = 0; i < m; i++){
        for(var j = 0; j < n; j++){
            if(visited[i][j] == 0 && grid[i][j] == "1"){
                dfs(i, j);
                answer++;
            }
        }
    }
    return answer;
    
    function dfs(i, j){
        if(i < 0 || i >= m || j < 0 || j >= n || visited[i][j] == 1 || grid[i][j] == "0"){
            return;
        }
        visited[i][j] = 1;
        for(var k = 0; k < 4; k++){
            dfs(i + dir[k], j + dir[k + 1]);
        }
    }
};