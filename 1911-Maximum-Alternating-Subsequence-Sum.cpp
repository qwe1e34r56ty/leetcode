class Solution {
public:
    long long maxAlternatingSum(vector<int>& nums) {
        long long inc = nums[0];
        long long dec = -pow(10, 10) - 1;
        for(int i = 1; i < nums.size(); i++){
            dec = max(dec, inc - nums[i]);
            inc = max(inc, (long long)nums[i]);
            inc = max(inc, dec + nums[i]);
        }
        return inc;
    }
};