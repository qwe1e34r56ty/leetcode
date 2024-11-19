class Solution {
public:
    long long maximumSubarraySum(vector<int>& nums, int k) {
        vector<int> table(100001, 0);
        int dup = 0;
        long long ans = 0;
        long long tmp = 0;
        for(int i = 0; i < k; i++){
            tmp += nums[i];
            if(table[nums[i]] == 1){
                dup++;
            }
            table[nums[i]]++;
        }
        if(!dup){
            ans = max(ans, tmp);
        }
        for(int i = k; i < nums.size(); i++){
            tmp += nums[i];
            if(table[nums[i]] == 1){
                dup++;
            }
            table[nums[i]]++;
            if(table[nums[i - k]] == 2){
                dup--;
            }
            table[nums[i - k]]--;
            tmp -= nums[i - k];
            if(!dup){
                ans = max(ans, tmp);
            }
        }
        return ans;
    }
};