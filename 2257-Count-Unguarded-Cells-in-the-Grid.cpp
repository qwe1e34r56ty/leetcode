class Solution {
public:
    int countUnguarded(int m, int n, vector<vector<int>>& guards, vector<vector<int>>& walls) {
        const int G = 2;
        const int W = 3;
        vector<vector<int>> grid(m, vector<int>(n, 0));
        int state = 0;
        for(auto i : guards){
            grid[i[0]][i[1]] = G;
        }
        for(auto i : walls){
            grid[i[0]][i[1]] = W;
        }
        for(int i = 0; i < m; i++){
            state = 0;
            for(int j = 0; j < n; j++){
                if(grid[i][j] == G) state = G;
                else if(grid[i][j] == W) state = W;
                else if(grid[i][j] == 0) grid[i][j] = (state == G);
            }
            state = 0;
            for(int j = n - 1; j >= 0; j--){
                if(grid[i][j] == G) state = G;
                else if(grid[i][j] == W) state = W;
                else if(grid[i][j] == 0) grid[i][j] = (state == G);
            }
        }
        for(int i = 0; i < n; i++){
            state = 0;
            for(int j = 0; j < m; j++){
                if(grid[j][i] == G) state = G;
                else if(grid[j][i] == W) state = W;
                else if(grid[j][i] == 0) grid[j][i] = (state == G);
            }
            state = 0;
            for(int j = m - 1; j >= 0; j--){
                if(grid[j][i] == G) state = G;
                else if(grid[j][i] == W) state = W;
                else if(grid[j][i] == 0) grid[j][i] = (state == G);
            }
        }
        int ans = 0;
        for(auto i : grid){
            for(auto j : i){
                ans += j == 0;
            }
        }
        return ans;
    }
};