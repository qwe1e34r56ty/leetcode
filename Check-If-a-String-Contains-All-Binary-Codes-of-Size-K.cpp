1class Solution {
2public:
3    bool hasAllCodes(string s, int k) {
4        int curCode = 0;
5        int curIndex = 0;
6        vector<int> checkedCode(pow(2, k), 0);
7        if(s.size() < k){
8            return false;
9        }
10        for(; curIndex < k; curIndex++){
11            curCode *= 2;
12            curCode += s[curIndex] == '0' ? 0 : 1;
13        }
14        checkedCode[curCode] = 1;
15        for(;curIndex < s.size(); curIndex++){
16            curCode &= (int)(pow(2, k - 1)) - 1;
17            curCode *= 2;
18            curCode += s[curIndex] == '0' ? 0 : 1;
19            checkedCode[curCode] = 1;
20        }
21        for(int i = 0; i < pow(2, k); i++){
22            if(checkedCode[i] == 0){
23                return false;
24            }
25        }
26        return true;
27    }
28};