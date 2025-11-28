1class Solution {
2public:
3    int numberOfPaths(vector<vector<int>>& grid, int k) {
4        int m = grid.size();
5        int n = grid[0].size();
6        int mod = pow(10, 9) + 7;
7        vector<vector<vector<int>>> ans(m, vector<vector<int>>(n, vector<int>(k, 0)));
8        ans[0][0][grid[0][0] % k] = 1;
9        for(int i = 0; i < m; i++){
10            for(int j = 0; j < n; j++){
11                if(i == 0 && j == 0) continue;
12                for(int l = 0; l < k; l++){
13                    if(j > 0){
14                        ans[i][j][l] += ans[i][j - 1][(l + k - (grid[i][j] % k)) % k];
15                    }
16                    if(i > 0){
17                        ans[i][j][l] += ans[i - 1][j][(l + k - (grid[i][j] % k)) % k];
18                    }
19                    ans[i][j][l] %= mod;
20                }
21            }
22        }
23        return ans[m - 1][n - 1][0];
24    }
25};