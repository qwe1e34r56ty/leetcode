class Solution {
public:
    int largestSumAfterKNegations(vector<int>& nums, int k) {
        multiset<int> a;
        int ans = 0;
        for(auto i : nums){
            a.insert(i);
            ans += i;
        }
        for(int i = 0; i < k; i++){
            int tmp = -(*a.begin());
            ans -= *a.begin();
            a.erase(a.begin());
            ans += tmp;
            a.insert(tmp);
        }
        return ans;
    }
};