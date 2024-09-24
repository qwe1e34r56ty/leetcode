/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var minSwap = function(nums1, nums2) {
    var len = nums1.length;
    var not_swap = 0;
    var not_swap2 = len + 1;
    var swap = 1;
    var swap2 = len + 1;
    for(var i = 1; i < len; i++){
        not_swap2 = len + 1;
        swap2 = len + 1;
        if(nums1[i] > nums1[i - 1] && nums2[i] > nums2[i - 1]){
            not_swap2 = not_swap;
            swap2 = swap + 1;
        }
        if(nums1[i] > nums2[i - 1] && nums2[i] > nums1[i - 1]){
            not_swap2 = Math.min(not_swap2, swap);
            swap2 = Math.min(swap2, not_swap + 1);
        }
        swap = swap2;
        not_swap = not_swap2;
    }
    return Math.min(swap, not_swap);
};