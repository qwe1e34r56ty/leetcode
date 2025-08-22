class Solution {
public:
    int minimumArea(vector<vector<int>>& grid) {
        int top = grid.size();
        int bottom = -1;
        int left = grid[0].size();
        int right = -1;

        for(int i = 0; i < grid.size(); i++){
            for(int j = 0; j < grid[0].size(); j++){
                if(grid[i][j] == 1){
                    top = min(top, i);
                    bottom = max(bottom, i);
                    left = min(left, j);
                    right = max(right, j);
                }
            }
        }
        return (bottom - top + 1) * (right - left + 1);
    }
};