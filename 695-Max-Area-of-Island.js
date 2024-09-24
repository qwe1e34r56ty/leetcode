/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxAreaOfIsland = function(grid) {
    let row = grid.length;
    let column = grid[0].length;
    let visited = new Array(row);
    for(let i = 0; i < row; i++){
        visited[i] = new Array(column).fill(0);
    }
    let answer = 0;
    let dir = [0, -1, 0, 1, 0];
    for(let i = 0; i < row; i++){
        for(let j = 0; j < column; j++){
            answer = Math.max(answer, dfs(i, j));
        }
    }
    return answer;
    
    function dfs(x, y){
        if(x < 0 || x >= row || y < 0 || y >= column || grid[x][y] == 0 || visited[x][y] == 1){
            return 0;
        }
        visited[x][y] = 1;
        let ret = 1;
        for(let i = 0; i < 4; i++){
            ret += dfs(x + dir[i], y + dir[i + 1]);
        }
        return ret;
    }
};