/**
 * @param {number[]} satisfaction
 * @return {number}
 */
var maxSatisfaction = function(satisfaction) {
    var sat = satisfaction.sort(
        function(a, b){
            return b - a;
        }
    );
    var sat_len = sat.length;
    var prefix = new Array(sat_len);
    prefix[0] = 0;
    for(var i = 1; i < sat_len + 1; i++){
        prefix[i] = prefix[i - 1] + sat[i - 1];
    }
    var answer = 0;
    for(var i = 1; i < sat_len + 1; i++){
        if(prefix[i] >= 0){
            answer += prefix[i];
        }
    }
    //console.log(sat);
    //console.log(prefix);
    return answer;
};