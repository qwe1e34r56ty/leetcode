/**
 * @param {number} n
 * @return {number}
 */

function min(a, b){
    return (a < b ) ? a : b;
}
var numSquares = function(n) {
    a = [];
    array = new Array(n + 1);
    var s_qrt;
    for(var i = 0; i <= n ; i++){
        array[i] = i;
    }
    for(var i = 1; i <= n; i++){
        if(Math.sqrt(i) % 1 == 0){
            a.push(i);
        }
    }
    for(var i = 1; i <= n; i++){
        for(var j = 0; j < a.length; j++){
 			if(a[j] > i) break;
            array[i] = min(array[i], array[i - a[j]] + 1);
        }
    }
    return array[n];
};