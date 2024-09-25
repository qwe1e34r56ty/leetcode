class Solution {
public:
    int findMinFibonacciNumbers(int k) {
        vector<int> fib(2, 1);
        int i = 1;
        while(fib[i] < k){
            fib.push_back(fib[i - 1] + fib[i]);
            i++;
        }
        int ans = 0;
        while(k != 0){
            auto it = upper_bound(fib.begin(), fib.end(), k);
            k -= *prev(it);
            ans++;
        }
        return ans;
    }
};