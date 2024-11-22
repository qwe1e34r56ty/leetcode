class Solution {
public:
    int maxEqualRowsAfterFlips(vector<vector<int>>& matrix) {
        unordered_map<string, int> m;
        for(const auto& row : matrix){
            string tmp = "";
            for(int i = 0; i < matrix[0].size(); i++){
                tmp += (row[i] == row[0] ? '1' : '0');
            }
            m[tmp]++;
        }
        int ans = 0;
        for(auto it : m){
            ans = max(ans, it.second);
        }
        return ans;
    }
};