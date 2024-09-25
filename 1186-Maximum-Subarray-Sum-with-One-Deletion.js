/**
 * @param {number[]} arr
 * @return {number}
 */
var maximumSum = function(arr) {
    let non_del = arr[0];
    let del = arr[0];
    let answer = arr[0];
    let len = arr.length;
    for(let i = 1; i < len; i++){
        del = Math.max(del + arr[i], non_del);
        non_del = Math.max(non_del + arr[i], arr[i]);
        answer = Math.max(answer, del);
        answer = Math.max(answer, non_del)
        //console.log(non_del + ", " + del);
    }
    return answer;
};