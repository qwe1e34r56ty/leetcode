/**
 * @param {number[]} time
 * @return {number}
 */
var numPairsDivisibleBy60 = function(time) {
    var array = new Array(60);
    for(var i = 0; i < 60; i++){
        array[i] = 0;
    }
    var ans = 0;
    for(var i = 0; i < time.length; i++){
        array[time[i] % 60]++;
    }
    for(var i = 1; i < 30; i++){
        ans += array[i] * array[60 - i];   
    }
    if(array[30] > 1) ans += array[30] * (array[30] - 1) / 2
    if(array[0] > 1) ans += array[0] * (array[0] - 1) / 2
    return ans;
};

function factorial(j){
    var ans = 1;
    for(var i = 1; i <= j; i++){
        ans *= i;
    }
    return ans;
}
