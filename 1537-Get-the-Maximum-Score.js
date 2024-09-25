/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var maxSum = function(nums1, nums2) {
    var len_1 = nums1.length;
    var len_2 = nums2.length;
    var dp_1 = new Array(len_1 + 1).fill(0);
    var dp_2 = new Array(len_2 + 1).fill(0);
    var mod = 1000000007;
    var i = 0;
    var j = 0;
    dp_1[0] = nums1[0];
    dp_2[0] = nums2[0];
    var tmp = 0;
    for(;i < len_1 || j < len_2;){
        if(nums1[i] < nums2[j] || j >= len_2){
            i++;
            dp_1[i] = dp_1[i - 1] + nums1[i];
        }
        else if(nums1[i] > nums2[j] || i >= len_1){
            j++;
            dp_2[j] = dp_2[j - 1] + nums2[j];
        }
        else{
            dp_1[i] = Math.max(dp_1[i], dp_2[j]);
            dp_2[j] = Math.max(dp_1[i], dp_2[j]);
            i++;
            j++;
            dp_1[i] = dp_1[i - 1] + nums1[i];
            dp_2[j] = dp_2[j - 1] + nums2[j];
        }
    }
    console.log(dp_1);
    console.log(dp_2);
    return Math.max(dp_1[len_1 - 1], dp_2[len_2 - 1]) % mod;
};