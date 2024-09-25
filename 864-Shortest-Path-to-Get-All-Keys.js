/**
 * @param {string[]} grid
 * @return {number}
 */
var shortestPathAllKeys = function(grid) {
    var row = grid.length;
    var column = grid[0].length;
    var key_count = 0;
    for(var i = 0; i < row; i++){
        for(var j = 0, charCode; j < column; j++){
            charCode = grid[i][j].charCodeAt();
            if(charCode >= 97 && charCode <= 122){
                key_count++;
            }
        }
    }
    var cost = new Array(row);
    for(var i = 0; i < row; i++){
        cost[i] = new Array(column);
        for(var j = 0; j < column; j++){
            cost[i][j] = new Array(1 << key_count).fill(Infinity);
        }
    }
    var start_x = 0;
    var start_y = 0;
    for(var i = 0; i < row; i++){
        for(var j = 0; j < column; j++){
            if(grid[i][j] == '@'){
                start_x = i;
                start_y = j;
            }
        }
    }
    cost[start_x][start_y][0] = 0;
    var dir = [0, 1, 0, -1, 0];
    dfs(start_x, start_y, 0);
    var answer = Infinity;
    for(var i = 0; i < row; i++){
        for(var j = 0; j < column; j++){
            answer = Math.min(answer, cost[i][j][(1 << key_count) - 1]);
        }
    }
    if(answer == Infinity){
        answer = -1;
    }
    return answer;
    
    function dfs(x, y, key){
        var next_x;
        var next_y;
        var next_charCode;
        //console.log(x + ", " + y);
        for(var i = 0; i < 4; i++){
            next_x = x + dir[i];
            next_y = y + dir[i + 1];
            if(reachable(next_x, next_y, key)){
                //console.log(next_x + ", " + next_y);
                //console.log("!");
                next_charCode = grid[next_x][next_y].charCodeAt();
                if(next_charCode >= 97 && next_charCode <= 122){
                    if(cost[next_x][next_y][key | (1 << (next_charCode - 97))] > cost[x][y][key] + 1){
                        cost[next_x][next_y][key | (1 << (next_charCode - 97))] = cost[x][y][key] + 1
                        dfs(next_x, next_y, key | (1 << (next_charCode - 97)));
                    }
                }
                else{
                    if(cost[next_x][next_y][key] > cost[x][y][key] + 1){
                        cost[next_x][next_y][key] = cost[x][y][key] + 1;
                        dfs(next_x, next_y, key);
                    }
                }
            }
        }
    }
    function reachable(x, y, key){
        if(x < 0 || x >= row || y < 0 || y >= column || grid[x][y] == '#'){
            return false;
        }
        var charCode = grid[x][y].charCodeAt();
        if(charCode <= 90 && charCode >= 65){
            if(key & (1 << (charCode - 65))){
                return true;
            }
            return false;
        }
        return true;
    }
};