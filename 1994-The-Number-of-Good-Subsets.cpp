class Solution {
public:
    int numberOfGoodSubsets(vector<int>& nums) {
        vector<int> count(31, 0);
        for(auto i : nums){
            count[i]++;
        }
        for(int i = 2; i * i < 30; i++){
            for(int j = 1; i * i * j < 30; j++){
                count[i * i * j] = 0;
            }
        }
        vector<int> prime = { 2, 3, 5, 7, 11, 13, 17, 19, 23, 29 };
        vector<long> bit(pow(2, 10), 0);
        bit[0] = 1;
        vector<set<int>> have(31, set<int>());
        for(int i = 2; i < 31; i++){
            for(int j = 0; j < 10; j++){
                if(!(i % prime[j])){
                    have[i].insert(j);
                }
            }
        }
        int m = pow(10, 9) + 7;
        for(int i = 2; i < 31; i++){
            int n = 0;
            if(count[i] > 0){
                for(auto j : have[i]){
                    n |= (int)pow(2, j);
                }
                for(int k = ((int)pow(2, 10) - 1) & ~n; k >= 0; k = (k - 1) & ~n){
                    bit[k | n] += bit[k] * count[i];
                    bit[k | n] %= m;
                }
            }
        }
        int ans = 0;
        for(int i = 0; i < pow(2, 10); i++){
            //cout << bit[i] << endl;
        }
        for(int i = 1; i < pow(2, 10); i++){
            ans += bit[i];
            ans %= m;
        }
        long mul = 1;
        for(int i = 0; i < count[1]; i++){
            mul *= 2;
            mul %= m;
        }
        mul *= ans;
        mul %= m;
        return (int)mul;
    }
};