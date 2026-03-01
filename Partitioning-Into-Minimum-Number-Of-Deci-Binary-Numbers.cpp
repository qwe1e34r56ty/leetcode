1class Solution {
2public:
3    int minPartitions(string n) {
4        int firstNum = n[0] - '0';
5        int maxNum = 0;
6        for(auto it = n.begin(); it != n.end(); it++){
7            maxNum = max(maxNum, (*it) - '0');
8        }
9        return maxNum;
10    }
11};