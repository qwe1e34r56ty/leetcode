class Solution {
public:
    vector<int> maximumBeauty(vector<vector<int>>& items, vector<int>& queries) {
        sort(items.begin(), items.end(), [](const vector<int>& a, const vector<int>&b){
            if(a[0] == b[0]) return a[1] > b[1];
            return a[0] < b[0];
        });
        for(int i = 0, cur_max = items[0][1]; i < items.size(); i++){
            cur_max = max(items[i][1], cur_max);
            items[i][1] = cur_max;
        }

        auto cmp = [](const pair<int, int>& a, const pair<int, int>& b){
            if(a.first == b.first) return a.second < b.second;
            return a.first < b.first;
        };
        set<pair<int, int>, decltype(cmp)> s(cmp);
        for(const auto& item: items)
            s.insert({item[0], item[1]});
        vector<int> ans;
        for(const auto& q : queries){
             auto it = s.lower_bound({q + 1, 0});
             if(it == s.begin()){
                ans.push_back(0);
             }else{
                it--;
                ans.push_back(it->second);
             }
        }
    
        return ans;
    }
};