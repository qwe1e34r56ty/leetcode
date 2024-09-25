/**
 * @param {number[][]} grid
 * @return {number}
 */
var minCost = function(grid) {
    let row = grid.length;
    let column = grid[0].length;
    let depth = new Array(row);
    for(let i = 0; i < row; i++){
        depth[i] = new Array(column).fill(row + column);
    }
    depth[0][0] = 0;
    for(let i = 0; i < row + column; i++){
        for(let j = 0; j < row; j++){
            for(let k = 0; k < column; k++){
                if(depth[j][k] == i){
                    search(j, k, i);
                }
            }
        }
        //console.log(depth);
    }
    return depth[row - 1][column - 1];
    function search(x, y, d){
        if(valid(x, y + 1, d + (grid[x][y] != 1))){
            depth[x][y + 1] = d + (grid[x][y] != 1);
            if(grid[x][y] == 1)
                search(x, y + 1, d + (grid[x][y] != 1));
        }
        if(valid(x, y - 1, d + (grid[x][y] != 2))){
            depth[x][y - 1] = d + (grid[x][y] != 2);
            if(grid[x][y] == 2)
                search(x, y - 1, d + (grid[x][y] != 2));
        }
        if(valid(x + 1, y, d + (grid[x][y] != 3))){
            depth[x + 1][y] = d + (grid[x][y] != 3);
            if(grid[x][y] == 3)
                search(x + 1, y, d + (grid[x][y] != 3));
        }
        if(valid(x - 1, y, d + (grid[x][y] != 4))){
            depth[x - 1][y] = d + (grid[x][y] != 4);
            if(grid[x][y] == 4)
                search(x - 1, y, d + (grid[x][y] != 4));
        }
    }
    function valid(x, y, d){
        return (x >= 0 && x < row && y >= 0 && y < column && depth[x][y] > d);
    }
};