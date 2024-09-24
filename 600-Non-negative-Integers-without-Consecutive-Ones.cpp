class Solution {
public:
    int findIntegers(int n) {
        vector<int> fib(32, 0);
        fib[0] = 1;
        fib[1] = 2;
        for(int i = 2; i < 32; i++){
            fib[i] = fib[i - 1] + fib[i - 2];
        }
        int ans = 0;
        int pre = 0;
        for(int i = 30; i >= 0; i--){
            if(n & (1 << i)){
                ans += fib[i];
                if(pre){
                    return ans;
                }
                pre = 1;
            }
            else{
                pre = 0;
            }
        }
        return ans + 1;
    }
};