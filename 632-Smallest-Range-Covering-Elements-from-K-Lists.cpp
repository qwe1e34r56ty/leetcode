class Solution {
public:
    vector<int> smallestRange(vector<vector<int>>& nums) {
        map<int, vector<int>> e;
        vector<int> ans(2);
        int k = nums.size();
        vector<int> count(k);
        for(int i = 0; i < k; i++){
            for(auto j : nums[i]){
                e[j].push_back(i);
            }
        }
        ans[0] = e.begin()->first, ans[1] = e.rbegin()->first;
        int cur = 0;
        auto start = e.begin();
        for(auto end : e){
            for(auto i : end.second){
                if(!count[i]++){
                    cur++;
                }
            }
            while(cur == k){
                if(ans[1] - ans[0] > end.first - start->first){
                    ans[0] = start->first, ans[1] = end.first;
                }
                for(auto i : start->second){
                    if(!--count[i]){
                        cur--;
                    }
                }
                start++;
            }
        }
        return ans;
    }
};