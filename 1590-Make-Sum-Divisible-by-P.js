/**
 * @param {number[]} nums
 * @param {number} p
 * @return {number}
 */
var minSubarray = function(nums, p) {
    let min = (a, b) => { return a < b ? a : b};
    let pfs = Array.from({length : nums.length + 1}, (v, i) => { return 0; });
    pfs[0] = 0;
    for(let i = 1; i < nums.length + 1; i++){
        pfs[i] = pfs[i - 1] + nums[i - 1];
        pfs[i] %= p;
    }
    let mod = pfs[nums.length];
    if(mod == 0) return 0;
    let map = new Map();
    let ret = nums.length;
    for(let i = 0; i < nums.length + 1; i++){
        let tmp = pfs[i] - mod;
        if(tmp < 0) tmp += p;
        if(map.has(tmp)){
            ret = min(ret, i - map.get(tmp));
            map.delete(tmp);
        }
        map.set(pfs[i], i);
    }
    if(ret == nums.length){
        return -1;
    }
    return ret;
};