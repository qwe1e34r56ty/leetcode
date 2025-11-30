1/**
2 * @param {number[]} nums
3 * @param {number} p
4 * @return {number}
5 */
6var minSubarray = function(nums, p) {
7    let min = (a, b) => { return a < b ? a : b};
8    let pfs = Array.from({length : nums.length + 1}, (v, i) => { return 0; });
9    pfs[0] = 0;
10    for(let i = 1; i < nums.length + 1; i++){
11        pfs[i] = pfs[i - 1] + nums[i - 1];
12        pfs[i] %= p;
13    }
14    let mod = pfs[nums.length];
15    if(mod == 0) return 0;
16    let map = new Map();
17    let ret = nums.length;
18    for(let i = 0; i < nums.length + 1; i++){
19        let tmp = pfs[i] - mod;
20        if(tmp < 0) tmp += p;
21        if(map.has(tmp)){
22            ret = min(ret, i - map.get(tmp));
23            map.delete(tmp);
24        }
25        map.set(pfs[i], i);
26    }
27    if(ret == nums.length){
28        return -1;
29    }
30    return ret;
31};