/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number}
 */
var longestCommonPrefix = function(arr1, arr2) {
    arr1 = arr1.map((i)=>{return "" + i}).sort();
    arr2 = arr2.map((i)=>{return "" + i}).sort();
    //console.log(arr1);
    //console.log(arr2);
    min = (a, b) => {return (a > b) ? b : a};
    max = (a, b) => {return (a > b) ? a : b};
    let i = 0;
    let j = 0;
    let ans = 0;
    let tmp = 0;
    let o = 0;
    while(i < arr1.length && j < arr2.length){
        tmp = 0;
        for(let k = 0; k < min(arr1[i].length, arr2[j].length); k++){
            if(arr1[i][k] == arr2[j][k]){
                tmp += 1;
            }
            else{
                break;
            }
        }
        ans = max(ans, tmp);
        if(arr1[i].localeCompare(arr2[j]) < 1){
            i++;
        }else{
            j++;
        }
        //console.log(i);
        //console.log(j);
        //console.log(tmp);
        //console.log(ans);
        o++;
    }
    //console.log(o);
    return ans;
};