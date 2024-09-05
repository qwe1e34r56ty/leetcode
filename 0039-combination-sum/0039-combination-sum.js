/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
    var answer = [];
    var tmpList = [];
    backtracking(answer, candidates, tmpList, target, 0);
    return answer;
};

function backtracking(answer, candidates, tmpList, remain, start){
    if(remain < 0) return;
    else if(remain == 0) answer.push(tmpList.slice());
    for(var i = start; i < candidates.length; i++){
        tmpList.push(candidates[i]);
        backtracking(answer, candidates, tmpList, remain - candidates[i], i);
        tmpList.pop();
    }
}