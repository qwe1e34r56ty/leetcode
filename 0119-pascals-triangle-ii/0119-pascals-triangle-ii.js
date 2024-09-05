/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function(rowIndex) {
    let arr = [1];
    if(rowIndex == 0){
        return arr;
    }
    let tmp = [];
    for(let i = 1; i <= rowIndex; i++){
        tmp = [];
        tmp.push(1);
        for(let j = 0; j < arr.length - 1; j++){
            tmp.push(arr[j] + arr[j + 1]);
        }
        tmp.push(1);
        arr = tmp;
    }
    return arr;
};