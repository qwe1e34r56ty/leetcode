/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxDistance = function(grid) {
    var n = grid.length;
    var dir = [0, 1, 0, -1, 0];
    var color = 1;
    var answer = -1;
    for(var i = 0; i < n * 2; i++){
        for(var j = 0; j < n; j++){
            for(var k = 0; k < n; k++){
                if(grid[j][k] == color){
                    for(var l = 0; l < 4; l++){
                        paint(j + dir[l], k + dir[l + 1], color + 1);
                    }
                }
            }
        }
        color++;
    }
    for(var i = 0; i < n; i++){
        for(var j = 0; j < n; j++){
            answer = Math.max(answer, grid[i][j] - 1);
        }
    }
    //console.log(grid);
    if(answer == 0 || answer == -1){
        return -1;
    }
    return answer;
    
    function paint(i, j, color){
        if(i < 0 || i >= n || j < 0 || j >= n || grid[i][j] != 0){
            return;
        }
        grid[i][j] = color;
    }
};