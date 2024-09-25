class Solution {
public:
    int minAddToMakeValid(string s) {
        int cur = 0;
        int ans = 0;
        for(auto i : s){
            if(i == '('){
                cur++;
            }
            else{
                cur--;
            }
            if(cur < 0){
                ans++;
                cur++;
            }
        }
        return ans + cur;
    }
};