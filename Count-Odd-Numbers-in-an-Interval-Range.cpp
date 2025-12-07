1class Solution {
2public:
3    int countOdds(int low, int high) {
4        return (high - low) / 2 + (low % 2 || high % 2);
5    }
6};