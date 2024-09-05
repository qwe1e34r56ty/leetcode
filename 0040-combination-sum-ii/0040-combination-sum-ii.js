/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function(candidates, target) {
    var answer = [];
    var tmpList = [];
    candidates = candidates.sort();
    backtracking(answer, candidates, tmpList, target, 0);
    return answer;
};

function backtracking(answer, candidates, tmpList, remain, start){
    var tmp = 0;
    if(remain < 0) return;
    else if(remain == 0) answer.push(tmpList.slice());
    for(var i = start; i < candidates.length; i++){
        if(i != start && candidates[i] == candidates[i - 1]) continue;
        tmpList.push(candidates[i]);
        backtracking(answer, candidates, tmpList, remain - candidates[i], i + 1);
        tmpList.pop();
    }
}