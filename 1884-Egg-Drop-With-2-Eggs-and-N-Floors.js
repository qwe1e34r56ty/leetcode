/**
 * @param {number} n
 * @return {number}
 */
var twoEggDrop = function(n) {
    var answer = 0;
    for(var i = 0; i < n; answer++){
        i += answer + 1;
    }
    return answer;
};