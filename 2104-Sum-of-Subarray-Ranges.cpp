class Solution {
public:
    long long subArrayRanges(vector<int>& nums) {
        long long res = 0;
        stack<long long> s;
        int n = nums.size();
        for(int i = 0; i <= n; i++){
            while(!s.empty() && nums[s.top()] < (i == n ? 2e9 : nums[i])){
                int j = s.top(); s.pop();
                int k = s.empty() ? -1 : s.top();
                res += (long long)nums[j] * (i - j) * (j - k);
            }
            s.push(i);
        }
        s = stack<long long>();
        for(int i = 0; i <= n; i++){
            while(!s.empty() && nums[s.top()] > (i == n ? -2e9 : nums[i])){
                int j = s.top(); s.pop();
                int k = s.empty() ? -1 : s.top();
                res -= (long long)nums[j] * (i - j) * (j - k);
            }
            s.push(i);
        }
        //cout << res << endl;
        return res;
    }
};