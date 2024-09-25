class Solution {
public:
    int maxVowels(string s, int k) {
        auto isVowel = [](char c){ return c == 'a' || c == 'e' || c == 'i' || c == 'o' || c == 'u';};
        int ans = 0;
        int cur = 0;
        for(auto i = s.begin(), j = s.begin(); j != s.end(); j++){
            if(isVowel(*j)){
                cur++;
            }
            if(j - i >= k){
                if(isVowel(*i)){
                    cur--;
                }
                i++;
            }
            ans = max(ans, cur);
        }
        return ans;
    }
};