/**
 * @param {character[][]} grid
 * @return {boolean}
 */
var containsCycle = function(grid) {
    var dir = [0, 1, 0, -1, 0];
    var m = grid.length;
    var n = grid[0].length;
    var visited = new Array(m);
    for(var i = 0; i < m; i++){
        visited[i] = new Array(n).fill(false);
    }
    for(var i = 0; i < m; i++){
        for(var j = 0; j < n; j++){
            if(visited[i][j]){
                continue;
            }
            if(dfs(i, j, -1, -1)){
                return true;
            }
        }
    }
    return false;
    function dfs(cur_x, cur_y, prev_x, prev_y){
        visited[cur_x][cur_y] = true;
        var next_x;
        var next_y;
        for(var i = 0; i < 4; i++){
            next_x = cur_x + dir[i];
            next_y = cur_y + dir[i + 1];
            if(next_x >= 0 && next_x < m && next_y >= 0 && next_y < n 
               && (next_x != prev_x || next_y != prev_y) && grid[cur_x][cur_y] == grid[next_x][next_y]){
                if(visited[next_x][next_y] || dfs(next_x, next_y, cur_x, cur_y)){
                    return true;
                }
            }
        }
        return false;
    }
};