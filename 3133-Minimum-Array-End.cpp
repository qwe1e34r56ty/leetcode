class Solution {
public:
    long long minEnd(int n, int x) {
        long long ans = x;
        for(int i = 0, j = 0; (1 << i) <= (n - 1); i++){
            while(((long long)1 << (i + j)) & x)
                    j++;
            if(((long long)1 << i) & (n - 1))
                ans |= ((long long)1 << (i + j));
        }
        return ans;
    }
};