/**
 * @param {number} n
 * @return {number}
 */
var countOrders = function(n) {
    var answer = 1;
    var mod = Math.pow(10, 9) + 7;
    for(var i = 4; i <= n * 2; i += 2){
        answer = answer * i * (i - 1) / 2;
        answer %= mod;
    }
    return answer;
};