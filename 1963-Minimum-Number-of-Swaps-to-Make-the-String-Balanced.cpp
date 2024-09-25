class Solution {
public:
    int minSwaps(string s) {
        int cur = 0;
        int ans = 0;
        for(int i = 0, j = s.size() - 1; i < s.size(); i++){
            if(s[i] == '['){
                cur++;
            }
            else{
                cur--;
            }
            if(cur < 0){
                while(i < j && s[j] != '['){
                    j--;
                }
                int tmp = s[i];
                s[i] = s[j];
                s[j] = tmp;
                ans++;
                cur = 1;
            }
        }
        return ans;
    }
};