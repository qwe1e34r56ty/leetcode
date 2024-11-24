class Solution {
public:
    long long maxMatrixSum(vector<vector<int>>& matrix) {
        long long ans = 0;
        int abs_min = 100001;
        int n_c = 0;
        bool zero = false;
        for(const vector<int>& i : matrix){
            for(int j : i){
                ans += (j > 0) ? j : -j;
                if(abs(abs_min) > abs(j)){
                    abs_min = j;
                }
                n_c += j < 0;
                zero |= j == 0;
            }
        }
        if(n_c % 2 && !zero){
            if(abs_min < 0)
                ans += abs_min * 2;
            else
                ans -= abs_min * 2;
        }
        return ans;
    }
};