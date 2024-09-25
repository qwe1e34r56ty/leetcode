class Solution {
public:
    int maxSumMinProduct(vector<int>& nums) {
        int len = nums.size();
        int mod = pow(10, 9) + 7;
        vector<long> prefix(len + 1, 0);
        for(int i = 1; i <= len; i++){
            prefix[i] = prefix[i - 1] + nums[i - 1];
        }
        vector<long> st;
        long ans = 0;
        for(int i = 0; i <= len; i++){
            while(!st.empty() && (i == len || nums[st.back()] >= nums[i])){
                int top = st.back(); st.pop_back();
                ans = max(ans, nums[top] * (prefix[i] - prefix[!st.empty() ? st.back() + 1 : 0]));
            }
            st.push_back(i);
        }
        ans %= mod;
        return ans;
    }
};