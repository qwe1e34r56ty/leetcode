/**
 * @param {number} n
 * @return {number[]}
 */
var lexicalOrder = function(n) {
    var front_number = 1;
    var answer = [];
    var cur = front_number;
    for(var i = 1; i < 10; i++){
        if(i > n){
            break;
        }
        answer.push(i);
        dfs(i);
    }
    return answer;
    function dfs(front){
        for(var i = 0; i < 10; i++){
            if(front * 10 + i > n){
                break;
            }
            answer.push(front * 10 + i);
            dfs(front * 10 + i);
        }
    }
};