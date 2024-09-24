/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number} k
 * @return {number[]}
 */
var maxNumber = function(nums1, nums2, k) {
    var dp_1 = table(nums1);
    var dp_2 = table(nums2);
    var ans = [0];
    
    for(var i = 0; i < k + 1; i++){
        if(i <= nums1.length && k - i <= nums2.length){
            ans = max(ans, generate_max_number(dp_1[i], dp_2[k - i]));
        }
    }
    
    function max(nums1, nums2){
        if(nums1.length > nums2.length){
            return nums1;
        }
        else if(nums1.length < nums2.length){
            return nums2;
        }
        else{
            for(var i = 0; i < nums1.length; i++){
                if(nums1[i] > nums2[i]){
                    return nums1;
                }
                else if(nums1[i] < nums2[i]){
                    return nums2;
                }
            }
        }
        return nums1;
    }
    
    function generate_max_number(nums1, nums2){
        var i = 0;
        var j = 0;
        var ret = [];
        for(;i + j < nums1.length + nums2.length;){
            if(i == nums1.length){
                ret.push(nums2[j]);
                j++;
            }
            else if(j == nums2.length){
                ret.push(nums1[i]);
                i++;
            }
            else{
                if(nums1[i] == nums2[j]){
                    for(var k = 0;1;k++){
                        if(nums1[i + k] > nums2[j + k]){
                            ret.push(nums1[i]);
                            i++;
                            break;
                        }
                        else if(nums1[i + k] < nums2[j + k]){
                            ret.push(nums2[j]);
                            j++;
                            break;
                        }
                        if(i + k == nums1.length - 1){
                            ret.push(nums2[j]);
                            j++;
                            break;
                        }
                        else if(j + k == nums2.length - 1){
                            ret.push(nums1[i]);
                            i++;
                            break;
                        }
                    }
                }
                else if(nums1[i] > nums2[j]){
                    ret.push(nums1[i]);
                    i++;
                }
                else{
                    ret.push(nums2[j]);
                    j++;
                }
            }
        }
        return ret;
    }    
    function table(nums){
        var check = 0;
        var cur = nums.length;
        var dp = new Array(nums.length + 1);
        dp[cur] = nums.slice();
        cur--;
        for(var i = 0; i < nums.length; i++){
            for(var j = 0; j < cur + 1; j++){
                if(dp[cur + 1][j] < dp[cur + 1][j + 1]){
                    dp[cur] = dp[cur + 1].slice(0, j).concat(dp[cur + 1].slice(j + 1, dp[cur + 1].length + 1));
                    cur--;
                    break;
                }
            }
        }
        for(;cur >= 0;cur--){
            dp[cur] = dp[cur + 1].slice(0, cur);
        }
        return dp;
    }
    return ans;
};