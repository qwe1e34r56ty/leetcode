/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
var getSum = function(a, b) {
    var carry = (a & b) << 1;
    var other = a ^ b;
    var tmp = carry;
    while(carry & other){
        carry = (carry & other) << 1;
        other = tmp ^ other;
        tmp = carry;
        //console.log(carry);
        //console.log(other);
    }
    return carry | other;
};