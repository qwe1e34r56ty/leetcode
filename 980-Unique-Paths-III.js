/**
 * @param {number[][]} grid
 * @return {number}
 */
var uniquePathsIII = function(grid) {
    var row = grid.length;
    var column = grid[0].length;
    var dp = new Array(1 << (row + column)).fill(0);
    var start_x = 0;
    var start_y = 0;
    var mask = 0;
    for(var i = 0; i < row; i++){
        for(var j = 0; j < column; j++){
            if(grid[i][j] == 1){
                start_x = i;
                start_y = j;
            }
            if(grid[i][j] == -1){
                mask |= (1 << (column * i + j));
            }
        }
    }
    //console.log(mask);
    var dir = [0, 1, 0, -1, 0];
    var ans = 0;
    dfs(start_x, start_y, mask);
    return ans;
    function dfs(x, y, mask){
        //console.log(x + ", " + y);
        if(grid[x][y] == 2){
            ans++;
            return;
        }
        mask |= (1 << (column * x + y));
        for(var i = 0; i < 4; i++){
            if(reachable(x + dir[i], y + dir[i + 1], mask)){
                dfs(x + dir[i], y + dir[i + 1], mask);
                //console.log();
            }
        }
    }
    function reachable(x, y, mask){
        if(x < 0 || x >= row || y < 0 || y >= column || (mask & (1 << (column * x + y)))){
            return false;
        }
        if(grid[x][y] == 2 && ((mask | (1 << (column * x + y))) != (1 << (row * column)) - 1)){
            return false;
        }
        return true;
    }
};