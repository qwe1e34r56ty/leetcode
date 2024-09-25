class Solution {
public:
    int minAbsDifference(vector<int>& nums, int goal) {
        if(goal == 0){
            return 0;
        }
        int sum = 0;
        for(auto num : nums){
            sum += num;
        };
        set<int> front{0};
        unordered_set<int> back{0};
        int ans = abs(goal);
        int len = nums.size();
        int mid = len >> 1;
        for(int i = 0; i < len; i += 2){
            for(auto j : vector<int>(front.begin(), front.end())){
                front.insert(j + nums[i]);
                ans = min(ans, abs(goal - j - nums[i]));
                if(ans == 0){
                    return 0;
                }
            }
        }
        for(int i = 1; i < len; i += 2){
            for(auto j : vector<int>(back.begin(), back.end())){
                if(back.insert(j + nums[i]).second)
                {
                    ans = min(ans, abs(goal - (j + nums[i])));
                    auto it = front.lower_bound(goal - j - nums[i]);
                    if(it != front.end()){
                        ans = min(ans, abs(goal - *it - j - nums[i]));
                    }
                    if(it != front.begin()){
                        ans = min(ans, abs(goal - *prev(it) - j - nums[i]));
                    }
                    if(ans == 0){
                        return ans;
                    }
                }
            }
        }
        return ans;
    }
};