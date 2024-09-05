#define max(a, b) ((a > b) ? a : b)

int maxSubArray(int* nums, int numsSize){
    int max_sum[100000];
    int ans = nums[numsSize - 1];
    max_sum[numsSize - 1] = nums[numsSize - 1];
    for(int i = numsSize - 2; i >= 0; i--){
        max_sum[i] = max(nums[i], nums[i] + max_sum[i + 1]);
        ans = max(max_sum[i], ans);
    }
    return ans;
}