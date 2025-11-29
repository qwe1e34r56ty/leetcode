1class Solution {
2public:
3    int minOperations(vector<int>& nums, int k) {
4        int sum = 0;
5        for(auto it = nums.begin(); it != nums.end(); it++){
6            sum += *it;
7        }
8        return sum % k;
9    }
10};