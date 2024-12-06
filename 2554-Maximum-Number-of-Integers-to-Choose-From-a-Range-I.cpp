class Solution {
public:
    int maxCount(vector<int>& banned, int n, int maxSum) {
        vector<int> v(n + 1, 0);
        v[0] = 1;
        for(auto i : banned){
            if(i <= n) v[i] = 1;
        }
        int ret = 0;
        int sum = 0;
        bool c_1;
        bool c_2;
        for(int i = 1; i < n + 1; i++){
            c_1 = v[i] == 1;
            c_2 = sum + i > maxSum;
            if(c_1 || c_2) continue;
            sum += i;
            ret++;
        }
        return ret;
    }
};