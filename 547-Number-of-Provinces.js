/**
 * @param {number[][]} isConnected
 * @return {number}
 */
var findCircleNum = function(isConnected) {
    var city_count = isConnected.length;
    var visited = new Array(city_count).fill(0);
    var answer = 0;
    for(var i = 0; i < city_count; i++){
        if(visited[i] == 0){
            dfs(i);
            answer++;
        }
    }
    return answer;
    function dfs(i){
        if(visited[i] == 1){
            return;
        }
        visited[i] = 1;
        for(var j = 0; j < city_count; j++){
            if(isConnected[i][j] == 1){
                dfs(j);
            }
        }
    }
};