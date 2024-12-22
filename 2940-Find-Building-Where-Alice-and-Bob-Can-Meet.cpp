class Solution {
public:
    vector<int> leftmostBuildingQueries(vector<int>& heights, vector<vector<int>>& queries) {
        int hs = heights.size();
        int qs = queries.size();
        vector<int> ans(qs, -1);
        vector<pair<int, int>> idx;
        for(int i = 0; i < qs; i++){
            int& x = queries[i][0], &y = queries[i][1];
            if(x > y){
                swap(x, y);
            }
            if(x == y || heights[x] < heights[y]){
                ans[i] = y;
            }
            else{
                idx.push_back({y, i});
            }
        }
        sort(idx.begin(), idx.end(), greater<>());

        vector<pair<int, int>> st;
        int j = hs - 1;
        for(auto [_, i] : idx){
            int x = queries[i][0];
            int y = queries[i][1];
            for(; j > y; j--){
                while(!st.empty() && heights[st.back().second] < heights[j]){
                    st.pop_back();
                }
                st.push_back({heights[j], j});
            }
            auto it = upper_bound(st.rbegin(), st.rend(), make_pair(heights[x], hs));
            ans[i] = (it==st.rend()) ?-1 : it->second;
        }
        return ans;
    }
};