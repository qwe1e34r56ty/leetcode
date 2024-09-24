/**
 * @param {number[][]} grid
 * @return {number}
 */
var largestIsland = function(grid) {
    var n = grid.length;
    var size = new Array(n * n + 1).fill(0);
    var color = new Array(n);
    var dir = [0, 1, 0, -1, 0];
    for(var i = 0; i < n; i++){
        color[i] = new Array(n).fill(0);
    }
    for(var i = 0, cur_color = 1; i < n; i++){
        for(var j = 0; j < n; j++){
            if(!color[i][j] && grid[i][j]){
                paint(i, j, cur_color++);
            }
        }
    }
    var adj = new Array(n);
    for(var i = 0; i < n; i++){
        adj[i] = new Array(n);
        for(var j = 0; j < n; j++){
            adj[i][j] = new Array(4).fill(0);
        }
    }
    var answer = 0;
    var comp = 0;
    for(var i = 0; i < n; i++){
        for(var j = 0; j < n; j++){
            comp = 0;
            if(color[i][j] != 0){
                answer = Math.max(answer, size[color[i][j]]);
                continue;
            }
            for(var k = 0; k < 4; k++){
                if(i + dir[k] >= 0 && j + dir[k + 1] >= 0 && i + dir[k] < n && j + dir[k + 1] < n){
                    for(var l = 0; l < k; l++){
                        if(color[i + dir[k]][j + dir[k + 1]] == adj[i][j][l]){
                            break;
                        }
                    }
                    if(l == k){
                        adj[i][j][k] = color[i + dir[k]][j + dir[k + 1]];
                        comp += size[adj[i][j][k]];
                    }
                }
            }
            comp++;
            answer = Math.max(answer, comp);
        }
    }
    //console.log(adj);
    //console.log(answer);
    //console.log(color);
    //console.log(size);
    return answer;
    function paint(i, j, cur_color){
        if(i < 0 || i >= n || j < 0 || j >= n || !grid[i][j] || color[i][j]){
            return;
        }
        else{
            size[cur_color]++;
            color[i][j] = cur_color;
        }
        for(var k = 0; k < 4; k++){
            paint(i + dir[k], j + dir[k + 1], cur_color);
        }
    }
};