class Solution {
public:
    int findChampion(int n, vector<vector<int>>& edges) {
        unordered_map<int, pair<int, int>> um;
        for(int i = 0; i < n; i++){
            um[i] = {0, 0};
        }
        for(const vector<int>& i : edges){
            um[i[0]].second++;
            um[i[1]].first++;
        }
        int r_c = 0;
        int champ = -1;
        for(int i = 0; i < n; i++){
            if(um[i].first == 0 && um[i].second == 0 && n > 1){
                return -1;
            }
            if(um[i].first == 0){
                r_c++;
                champ = i;
            }
            //cout << i << " : " << um[i].first << ", " << um[i].second << endl;
        }
        if(r_c > 1){
            return -1;
        }
        return champ;
    }
};