/**
 * @param {number[]} target
 * @return {number}
 */
var minNumberOperations = function(target) {
    let answer = 0;
    let prev = 0;
    let len = target.length;
    for(let i = 0; i < len; i++){
        if(target[i] > prev){
            answer += target[i] - prev;
        }
        prev = target[i];
    }
    return answer;
};