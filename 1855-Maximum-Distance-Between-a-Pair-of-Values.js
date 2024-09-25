/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var maxDistance = function(nums1, nums2) {
    let len_1 = nums1.length;
    let len_2 = nums2.length;
    let answer = 0;
    for(let i = 0; i < len_1; i++){
        let low = Math.min(i, len_2 - 1);
        let high = len_2 - 1;
        while(low < high){
            let mid = Math.floor((low + high + 1) / 2);
            if(nums1[i] <= nums2[mid]){
                low = mid;
            }
            else{
                high = mid - 1;
            }
            //console.log(i + ", " + low + ", " + high);
        }
        answer = Math.max(answer, low - i);
    }
    return answer;
};