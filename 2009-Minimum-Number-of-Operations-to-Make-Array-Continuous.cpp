class Solution {
public:
    int minOperations(vector<int>& nums) {
        sort(nums.begin(), nums.end());
        map<int, int> window;
        //int start = 0;
        int len = nums.size();
        int empty = len;
        int ans = len;
        for(int i = 0, j = 0; j < len; j++){
            while(nums[j] - nums[i] > len - 1){
                if(!--window[nums[i]]){
                    window.erase(nums[i]);
                    empty++;
                }
                i++;
            }
            if(!window[nums[j]]++){
                empty--;
            }
            ans = min(ans, empty);
            //cout << empty << endl;
        }
        return ans;
    }
};