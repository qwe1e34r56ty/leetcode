class Solution {
public:
    int maximumUniqueSubarray(vector<int>& nums) {
        using namespace std;
        unordered_map<int, int> count;
        int ans = 0;
        int cur = 0;
        int dup = 0;
        for(auto i = nums.begin(), j = nums.begin(); j != nums.end(); j++){
            if(count[*j]++){
                dup++;
            }
            cur += *j;
            while(dup > 0){
                if(--count[*i] == 1){
                    dup--;
                }
                cur -= *i;
                i++;
            }
            ans = max(ans, cur);
        }
        return ans;
    }
};