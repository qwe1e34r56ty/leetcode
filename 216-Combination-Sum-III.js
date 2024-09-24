/**
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */
var combinationSum3 = function(k, n) {
    var answer = [];
    var tmpList = [];
    backtracking(answer, tmpList, n, k, 1);
    return answer;
};

function backtracking(answer, tmpList, remain, rest, start){
    if(remain < 0) return;
    else if(remain == 0 && rest == 0) answer.push(tmpList.slice());
    else if(rest <= 0) return;
    for(var i = start; i <= 9; i++){
        if(i == 10) return;
        tmpList.push(i);
        backtracking(answer, tmpList, remain - i, rest - 1, i + 1);
        tmpList.pop();
    }
}