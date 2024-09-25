#include<iostream>
#include<vector>
#include<algorithm>

class Solution {
public:
    int countSquares(vector<vector<int>>& matrix) {
        int ans = 0;
        int row = matrix.size();
        int col = matrix[0].size();
        vector<vector<int>> dp(row, vector<int>(col, 0));
        for(int i = 0; i < row; i++){
            for(int j = 0; j < col; j++){
                dp[i][j] += (i > 0 && j > 0 && matrix[i][j] == 1) ? min(min(dp[i - 1][j], dp[i - 1][j - 1]), dp[i][j - 1]) : 0;
                dp[i][j] += (matrix[i][j] == 1) ? 1 : 0;
                ans += dp[i][j];
            }
        }
        /*for(int i = 0; i < row; i++){
            for(int j = 0; j < col; j++){
                std::cout << dp[i][j] << " ";
            }
            std::cout << endl;
        }*/
        return ans;
    }
};