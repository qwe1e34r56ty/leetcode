class Solution {
public:
    int minFlips(string target) {
        char last = '0';
        int ans = 0;
        for(auto i : target){
            ans += i != last;
            last = i;
        }
        return ans;
    }
};