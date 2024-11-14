class Solution {
public:
    int minimizedMaximum(int n, vector<int>& quantities) {
        long long total = 0;
        for(int n : quantities){
            total += n;
        }
        int l =  1;
        int r = 100000;
        int m;
        while(l < r){
            m = (l + r) / 2;
            int sum = 0;
            for(int i : quantities){
                while(i > 0){
                    sum += 1;
                    i -= m;
                }
            }
            if(sum > n) l = m + 1;
            else r = m;
        }
        return l;
    }
};