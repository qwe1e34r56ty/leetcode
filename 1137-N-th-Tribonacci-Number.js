/**
 * @param {number} n
 * @return {number}
 */
var tribonacci = function(n) {
    if(n == 0){
        return 0;
    }
    if(n == 1){
        return 1;
    }
    if(n == 2){
        return 1;
    }
    let fibo = new Array(n + 1);
    fibo[0] = 0;
    fibo[1] = 1;
    fibo[2] = 1;
    for(let i = 3; i < n + 1; i++){
        fibo[i] = fibo[i - 1] + fibo[i - 2] + fibo[i - 3];
    }
    return fibo[n];
};