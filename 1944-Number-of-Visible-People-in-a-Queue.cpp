class Solution {
public:
    vector<int> canSeePersonsCount(vector<int>& heights) {
        int n = heights.size();
        vector<int> visible;
        vector<int> ans(n, 0);
        for(int i = n - 1; i >= 0; i--){
            auto it = lower_bound(visible.rbegin(), visible.rend(), heights[i]);
            if(it == visible.rend()){
                ans[i] = visible.size();
            }
            else{
                ans[i] = it - visible.rbegin() + 1;
            }
            while(!visible.empty() && visible.back() <= heights[i]){
                visible.pop_back();
            }
            visible.push_back(heights[i]);
        }
        return ans;
    }
};