class Solution {
public:
    int twoCitySchedCost(vector<vector<int>>& costs) {
        int n = costs.size();
        int ans = 0;
        for(auto i : costs){
            ans += i[0];
        }
        vector<int> b(n, 0);
        for(int i = 0; i < n; i++){
            b[i] = costs[i][0] - costs[i][1];
        }
        sort(b.begin(), b.end(), [](int a, int b){return a > b;});
        for(int i = 0; i < n / 2; i++){
            ans -= b[i];
        }
        return ans;
    }
};