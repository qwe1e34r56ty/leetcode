class Solution {
public:
    vector<int> partitionLabels(string s) {
        vector<pair<int, int>> section(26, pair<int, int>(-1, -1));
        int len = s.size();
        for(int i = 0; i < len; i++){
            if(section[s[i] - 97].first == -1){
                section[s[i] - 97].first = i;
            }
            section[s[i] - 97].second = i;
        }
        int cur = 0;
        vector<int> ans;
        int start = 0;
        for(int i = 0; i < len; i++){
            if(section[s[i] - 97].first == i){
                cur++;
            }
            if(section[s[i] - 97].second == i){
                cur--;
            }
            if(!cur){
                ans.push_back(i - start + 1);
                start = i + 1;
            }
        }
        return ans;
    }
};