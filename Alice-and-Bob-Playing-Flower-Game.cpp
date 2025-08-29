class Solution {
public:
    long long flowerGame(int n, int m) {
        long long ret = 0;
        n -= 1;
        m -= 1;
        if(m == 0){
            ret += ((n + 1) / 2);
            return ret;
        }
        if(n == 0){
            ret += ((m + 1) / 2);
            return ret;
        }
        ret += (long long)((n + 2) / 2) * ((m + 1) / 2);
        ret += (long long)((n + 1) / 2) * ((m + 2) / 2);
        return ret;
    }
};