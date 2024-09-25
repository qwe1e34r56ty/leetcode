/**
 * @param {string} binary
 * @return {number}
 */
var numberOfUniqueGoodSubsequences = function(binary) {
    let len = binary.length;
    let ans = 0;
    for(let i = 0; i < len; i++){
        if(binary[i] == '0'){
            ans = 1;
            break;
        }
    }
    let zero = 0;
    let one = 0;
    let mod = Math.pow(10, 9) + 7;
    for(let i = 0; i < len; i++){
        if(binary[i] == '1'){
            one += zero + 1;
            one %= mod;
        }
        else{
            zero += one;
            zero %= mod;
        }
    }
    return (one + zero + ans) % mod;
};