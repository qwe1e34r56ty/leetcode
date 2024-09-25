class Solution {
public:
    int minMoves(vector<int>& nums, int k) {
        int n = nums.size();
        long ans = n;
        ans *= (n + 1) / 2;
        ans += 1;
        vector<long> a, b(1);
        for(int i = 0; i < n; i++){
            if(nums[i]) a.push_back(i);
        }
        int a_len = a.size();
        for(int i = 0; i < a_len; i++){
            b.push_back(a[i] + b[i]);
            //cout << b[i] << endl;
        }
        //cout << endl;
        for(int i = 0; i < a_len - k + 1; i++){
            ans = [&](long a, long b){ return a < b ? a : b; }(ans, b[i + k] - b[(k + 1) / 2 + i] - b[k / 2 + i] + b[i]);
            //cout << ans << endl;
        }
        return int(ans - (k / 2) * ((k + 1) / 2));
    }
};