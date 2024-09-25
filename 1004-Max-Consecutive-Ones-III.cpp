class Solution {
public:
    int longestOnes(vector<int>& nums, int k) {
        int ans = 0;
        for(auto i = nums.begin(), j = nums.begin(); j != nums.end(); j++){
            if(!*j){
                k--;
                while(k < 0){
                    k += !*i;
                    i++;
                }
            }
            ans = max(ans, int(j - i + 1));
        }
        return ans;
    }
};