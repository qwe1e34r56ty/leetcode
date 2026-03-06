1class Solution {
2public:
3    bool checkOnesSegment(string s) {
4        char last = '1';
5        for(auto it = s.begin() + 1; it != s.end(); it++){
6            if(last == '0' && *it == '1'){
7                return false;
8            }
9            last = *it;
10        }
11        return true;
12    }
13};