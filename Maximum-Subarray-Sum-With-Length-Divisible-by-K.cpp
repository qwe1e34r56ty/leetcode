1class Solution {
2public:
3    long long maxSubarraySum(vector<int>& nums, int k) {
4        int n = nums.size();
5        long long prefixSum = 0, maxSum = LONG_LONG_MIN;
6        vector<long long> kSum(k, LONG_LONG_MAX / 2);
7        kSum[k - 1] = 0;
8        for (int i = 0; i < n; i++) {
9            prefixSum += nums[i];
10            maxSum = max(maxSum, prefixSum - kSum[i % k]);
11            kSum[i % k] = min(kSum[i % k], prefixSum);
12        }
13        return maxSum;
14    }
15};