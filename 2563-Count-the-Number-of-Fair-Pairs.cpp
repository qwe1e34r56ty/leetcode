class Solution {
public:
    long long countFairPairs(vector<int>& nums, int lower, int upper) {
        long long ans = 0;
        sort(nums.begin(), nums.end());
        for(auto it = nums.begin(); it != nums.end(); it++){
            auto up = upper_bound(it + 1, nums.end(), upper - *it);
            auto low = lower_bound(it + 1, nums.end(), lower - *it);
            ans += up - low;
        }
        return ans;
    }
};