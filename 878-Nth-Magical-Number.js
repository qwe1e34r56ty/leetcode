/**
 * @param {number} n
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
var nthMagicalNumber = function(n, a, b) {
    let once_same = 0;
    let sum_a = 0;
    let sum_b = 0;
    sum_a += a;
    once_same++;
    while(sum_a != sum_b){
        if(sum_a > sum_b){
            sum_b += b;
        }
        else{
            sum_a += a;
        }
        once_same++;
    }
    once_same--;
    let once = sum_a;
    let etc = n % once_same;
    let answer = 0;
    if(n % once_same){
        sum_a = 0;
        sum_b = 0;
        (a > b) ? (sum_b += b) : (sum_a += a);
        etc--;
        while(etc-- != 0){
            if(sum_a + a > sum_b + b){
                sum_b += b;
            }
            else{
                sum_a += a;
            }
        }
        answer = Math.max(sum_a, sum_b);
    }
    answer += Math.floor(n / once_same) * (once % (Math.pow(10, 9) + 7));
    answer %= (Math.pow(10, 9) + 7);
    return answer;
};