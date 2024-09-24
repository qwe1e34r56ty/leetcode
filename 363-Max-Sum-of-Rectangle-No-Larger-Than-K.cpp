#include<iostream>
#include<vector>
#include<set>
#include<algorithm>
#include<cmath>

using namespace std;

class Solution {
public:
    int maxSumSubmatrix(vector<vector<int>>& matrix, int m) {
        int row = matrix.size();
        int col = matrix[0].size();
        int ans = -pow(10, 9) - 7;
        vector<int> sum;
        vector<int> prefix;
        set<int> sums;
        for(int i = 0; i < col; i++){
            sum = vector<int>(row, 0);
            for(int j = i; j < col; j++){
                prefix = vector<int>(row, 0);
                sums = set<int>();
                sums.insert(0);
                for(int k = 0; k < row; k++){
                    sum[k] += matrix[k][j];
                    prefix[k] = ((k > 0) ? prefix[k - 1] : 0) + sum[k];
                    if(sums.upper_bound(prefix[k] - m - 1) != sums.end()){
                        ans = max(ans, prefix[k] - *sums.upper_bound(prefix[k] - m - 1));
                    }
                    sums.insert(prefix[k]);
                }
            }
        }
        return ans;
    }
};