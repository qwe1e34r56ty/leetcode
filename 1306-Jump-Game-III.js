/**
 * @param {number[]} arr
 * @param {number} start
 * @return {boolean}
 */
var canReach = function(arr, start) {
    var arr_len = arr.length;
    var visited = new Array(arr_len).fill(0);
    function dfs(start){
        var ret = false;
        if(arr[start] == 0){
            return true;
        }
        if(visited[start] == 1){
            return false;
        }
        visited[start] = 1;
        if(start + arr[start] < arr_len){
            ret = ret || dfs(start + arr[start]);
        }
        if(start - arr[start] >= 0){
            ret = ret || dfs(start - arr[start]);
        }
        return ret;
    }
    return dfs(start);
};