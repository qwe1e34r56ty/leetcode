class Solution {
public:
    int maxSumTwoNoOverlap(vector<int>& nums, int firstLen, int secondLen) {
        int n = nums.size();
        vector<int> asc(n, 0);
        vector<int> desc(n, 0);
        for(int i = 0, cur = 0; i < n; i++){
            cur += nums[i];
            if(i >= firstLen)
                cur -= nums[i - firstLen];
            asc[i] = max(i > 0 ? asc[i - 1] : 0, cur);
        }
        for(int i = n - 1, cur = 0; i >= 0; i--){
            cur += nums[i];
            if(i <= n - 1 - secondLen)
                cur -= nums[i + secondLen];
            desc[i] = max(i < n - 1 ? desc[i + 1] : 0, cur);
        }
        int ans = 0;
        for(int i = 0; i < n - 1; i++){
            ans = max(ans, asc[i] + desc[i + 1]);
        }
        for(int i = 0, cur = 0; i < n; i++){
            cur += nums[i];
            if(i >= secondLen)
                cur -= nums[i - secondLen];
            asc[i] = max(i > 0 ? asc[i - 1] : 0, cur);
            //cout << asc[i];
        }
        for(int i = n - 1, cur = 0; i >= 0; i--){
            cur += nums[i];
            if(i <= n - 1 - firstLen)
                cur -= nums[i + firstLen];
            desc[i] = max(i < n - 1 ? desc[i + 1] : 0, cur);
        }
        for(int i = 0; i < n - 1; i++){
            ans = max(ans, asc[i] + desc[i + 1]);
        }
        return ans;
    }
};