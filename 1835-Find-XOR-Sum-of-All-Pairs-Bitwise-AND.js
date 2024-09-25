/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number}
 */
var getXORSum = function(arr1, arr2) {
    let front = 0;
    let back = 0;
    let arr1_len = arr1.length;
    let arr2_len = arr2.length;
    for(let i = 0; i < arr1_len; i++){
        front ^= arr1[i];
    }
    for(let i = 0; i < arr2_len; i++){
        back ^= arr2[i];
    }
    return front & back;
};