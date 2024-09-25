class Solution {
public:
    int minimumEffort(vector<vector<int>>& A) {
        for (auto &a : A)
            a[0] = a[1] - a[0];
        sort(A.begin(), A.end());
        int min = 0;
        for(auto& i : A){
            min = max(i[1], min + i[1] - i[0]);
        }
        return min;
    }
};