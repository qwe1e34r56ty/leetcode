/**
 * @param {number} n
 * @return {number}
 */
var minSteps = function(n) {
    var answer = 0;
    var d = 2;
    while(n > 1){
        while(n % d == 0){
            n = n / d;
            answer += d;
        }
        d++;
    }
    return answer;
};