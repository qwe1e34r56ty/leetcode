/**
 * @param {number[][]} grid
 * @return {number}
 */
var shortestBridge = function(grid) {
    var dir = [0, 1, 0, -1, 0];
    var row = grid.length;
    var column = grid[0].length;
    var visited = new Array(row);
    var answer = Infinity;
    for(var i = 0; i < row; i++){
        visited[i] = new Array(column).fill(0);
    }
    for(var i = 0; i < row; i++){
        for(var j = 0; j < column; j++){
            if(grid[i][j] == 1){
                paint_grid(i, j, -1, 1);
                j = column;
                i = row;
                break;
            }
        }
    }
    for(var i = 0; i < row; i++){
        for(var j = 0; j < column; j++){
            if(grid[i][j] == 1){
                paint_grid(i, j, 0, 1);
                j = column;
                i = row;
                break;
            }
        }
    }
    for(var i = 0; i < row; i++){
        for(var j = 0; j < column; j++){
            if(grid[i][j] == 0){
                paint_grid(i, j, Infinity, 0);
            }
        }
    }
    for(var i = 0; i < 2 * row; i++){
        for(var j = 0; j < row; j++){
            for(var k = 0; k < column; k++){
                for(var l = 0; l < 4; l++){
                    if(j + dir[l] < 0 || j + dir[l] >= row || k + dir[l + 1] < 0 || k + dir[l + 1] >= column || grid[j + dir[l]][k + dir[l + 1]] == -1){
                        continue;
                    }
                    grid[j][k] = Math.min(grid[j][k], grid[j + dir[l]][k + dir[l + 1]] + 1);
                }
            }
        }
    }
    for(var j = 0; j < row; j++){
        for(var k = 0; k < column; k++){
            for(var l = 0; l < 4; l++){
                if(j + dir[l] < 0 || j + dir[l] >= row || k + dir[l + 1] < 0 || k + dir[l + 1] >= column || grid[j][k] != -1 || grid[j + dir[l]][k + dir[l + 1]] == -1){
                    continue;
                }
                answer = Math.min(answer, grid[j + dir[l]][k + dir[l + 1]]);
            }
        }
    }
    //console.log(grid);
    return answer;
    function paint_grid(x, y, color, origin){
        if(x < 0 || x >= row || y < 0 || y >= column || visited[x][y] == 1 || grid[x][y] != origin){
            return;
        }
        visited[x][y] = 1;
        grid[x][y] = color;
        for(var i = 0; i < 4; i++){
            paint_grid(x + dir[i], y + dir[i + 1], color, origin);   
        }
    }
};