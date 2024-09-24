/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */

function min(a, b){
    return (a < b) ? a : b;
}

var coinChange = function(coins, amount) {
    var array = new Array(amount + 1);
    for(var i = 0; i <= amount; i++){
        array[i] = -1;
    }
    array[0] = 0;
    coins.sort();
    for(var i = 1; i <= amount; i++){
        for(var j = 0; j < coins.length; j++){
            if(coins[j] <= i){
                if(array[i - coins[j]] != -1){
                    if(array[i] != -1){
                        array[i] = min(array[i], array[i - coins[j]] + 1);
                    }
                    else{
                        array[i] = array[i - coins[j]] + 1;
                    }
                }
            }
        }
    }
    return array[amount];
};