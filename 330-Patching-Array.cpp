class Solution {
public:
    int minPatches(vector<int>& nums, int n) {
        long miss = 1, ans = 0;
        auto i = nums.begin();
        while(miss <= n){
            if(i != nums.end() && *i <= miss){
                miss += *i;
                i++;
            }
            else{
                miss += miss;
                ans++;
            }
        }
        return ans;
    }
};