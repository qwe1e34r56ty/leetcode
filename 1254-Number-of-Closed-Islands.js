/**
 * @param {number[][]} grid
 * @return {number}
 */
var closedIsland = function(grid) {
    var answer = 0;
    var row = grid.length;
    var column = grid[0].length;
    for(var i = 0; i < row; i++){
        for(var j = 0; j < column; j++){
            if(grid[i][j] == 0){
                if(dfs(i, j)){
                    answer++;
                }
            }
        }
    }
    return answer;
    function dfs(i, j){
        if(i < 0 || i >= row || j < 0 || j >= column){
            return false;
        }
        if(grid[i][j] == 1){
            return true;
        }
        grid[i][j] = 1;
        var ret = true;
        ret = ret & dfs(i - 1, j);
        ret = ret & dfs(i + 1, j);
        ret = ret & dfs(i, j - 1);
        ret = ret & dfs(i, j + 1);
        return ret;
    }
};