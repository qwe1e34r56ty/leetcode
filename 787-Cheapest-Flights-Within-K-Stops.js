/**
 * @param {number} n
 * @param {number[][]} flights
 * @param {number} src
 * @param {number} dst
 * @param {number} K
 * @return {number}
 */
var findCheapestPrice = function(n, flights, src, dst, K) {
    var cost = new Array(n);
    var answer = Infinity;
    var min = (a, b) => (a < b) ? a : b;
    for(var i = 0; i < n; i++){
        cost[i] = new Array(n).fill(Infinity);
    }
    for(var i = 0; i < flights.length; i++){
        if(flights[i][0] == src){
            cost[0][flights[i][1]] = flights[i][2];
        }
    }
    for(var i = 1; i < n; i++){
        for(var j = 0; j < flights.length; j++){
            if(cost[i - 1][flights[j][0]] != Infinity){
                cost[i][flights[j][1]] = min(cost[i][flights[j][1]], cost[i - 1][flights[j][0]] + flights[j][2]);
            }
        }
    }
    for(var i = 0; i <= K; i++){
        if(cost[i][dst] != -1)
            answer = min(answer, cost[i][dst]);
    }
    if(answer == Infinity){
        answer = -1;
    }
    return answer;
};