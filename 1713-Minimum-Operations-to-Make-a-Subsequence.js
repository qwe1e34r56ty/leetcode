/**
 * @param {number[]} target
 * @param {number[]} arr
 * @return {number}
 */
var minOperations = function(target, arr) {
    let map = [];
    for(let i = 0; i < target.length; i++){
        map[target[i]] = i;
    }
    let cur = [];
    for(let i = 0; i < arr.length; i++){
        if(map[arr[i]] != undefined){
            if(!cur.length || map[arr[i]] > cur[cur.length - 1]){
                cur.push(map[arr[i]])
            }
            else {
                let l = 0;
                let r = cur.length - 1;
                while(l < r){
                    let mid = (l + r) >> 1;
                    if(cur[mid] < map[arr[i]]){
                        l = mid + 1;
                    }
                    else{
                        r = mid;
                    }
                }
                cur[l] = map[arr[i]];
            }
        }
        //console.log(cur);
    }
    return target.length - cur.length;
};