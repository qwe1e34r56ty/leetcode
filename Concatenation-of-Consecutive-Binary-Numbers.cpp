1class Solution {
2public:
3    int concatenatedBinary(int n) {
4        long long mod = pow(10, 9) + 7;
5        long long prevMod = 1;
6        long long result = 0;
7        for(;n > 0; n--){
8            result += (n * prevMod);
9            result %= mod;
10            prevMod = (prevMod * (long long)pow(2, binaryLen(n))) % mod;
11        }
12        return result;
13    }
14
15    int binaryLen(int n){
16        int result = 1;
17        while(n > 1){
18            n /= 2;
19            result++;
20        }
21        return result;
22    }
23};