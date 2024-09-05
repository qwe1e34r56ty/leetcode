/**
 * @param {string} digits
 * @return {string[]}
 */
var array = new Array(10);
array[2] = "abc";
array[3] = "def";
array[4] = "ghi";
array[5] = "jkl";
array[6] = "mno";
array[7] = "pqrs";
array[8] = "tuv";
array[9] = "wxyz";
var answer = [];
var tmp = [];
void 0;

var letterCombinations = function(digits) {
    var ret;
    if(digits.length == 0) return [];
    recursion(digits, 0);
    ret = answer.slice();
    answer = [];
    return ret;
};

function recursion(digits, i){
    for(var j = 0; j < array[digits[i]].length; j++){
        tmp.push(array[digits[i]][j]);
        if(digits.length - 1 == i)
            answer.push(tmp.toString().replace(/,/g, ""));
        else
            recursion(digits, i + 1);
        tmp.pop();
    }
}